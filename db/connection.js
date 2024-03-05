import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

// pools will use environment variables
// for connection information
export const pool = new Pool({
  allowExitOnIdle: true,
});

try {
  await pool.query("SELECT NOW()");
  console.log("DATABASE CONNECTED");
} catch (error) {
  console.log(error);
}
