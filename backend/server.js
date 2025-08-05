import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 5001;

// DB connection
async function initDB() {
  try {
    await sql `CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
     )`;
     console.log("DB initialized successfully");
  } catch (error) {
    console.log("Error initializing DB:", error);
    process.exit(1);
  }
}

app.post("/api/transactions", async (req, res) => {
  try {
    const { user_id, title, amount, category} = req.body;
    if (!user_id || !title || !category || amount === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const transaction = await sql `
    INSERT INTO transactions (user_id, title, amount, category)
    VALUES (${user_id}, ${title}, ${amount}, ${category})
    RETURNING *
    `
    res.status (201).json(transaction[0])

  } catch (error) {
    console.log("Error api transaction:", error);
    res.status(500).json({  message: "Internal server error" });
  }
});

// app.get("/", (req, res) => {
//     res.send("This is working !!");
// })

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
  });

});