import { neon } from "@neondatabase/serverless";

import "dotenv/config";

// create a SQL connection using the neon client
export const sql = neon (process.env.DATABASE_URL);
