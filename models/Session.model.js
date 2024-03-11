import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * from sessions WHERE session_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

export const SessionModel = {
  findById,
};
