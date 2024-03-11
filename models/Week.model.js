import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM weeks WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

export const WeekModel = {
  findById,
};
