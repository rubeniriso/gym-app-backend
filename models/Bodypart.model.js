import { pool } from "../db/connection.js";

const findAll = async () => {
  const query = "SELECT * FROM bodypart";
  const result = await pool.query(query);
  return result;
};
export const BodypartModel = {
  findAll,
};
