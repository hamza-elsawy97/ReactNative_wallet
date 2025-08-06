import express from "express";
import { sql } from "../config/db.js";
import { getTransactionsByUserId, 
  createTransaction, 
  deleteTransaction, 
  getTransactionsSummary } 
  from "../controllers/transactionController.js";

const router = express.Router();

// get all transactions by user ID
router.get("/:user_Id", getTransactionsByUserId);

// post transactions
router.post("/", createTransaction);

// delete transaction
router.delete("/:id", deleteTransaction);

// Get summary of all transactions 
router.get("/summary/:userId", getTransactionsSummary);

export default router;