import { pool } from "../db/connection.js";

const findAll = async () => {
  const result = await pool.query("SELECT * from sessions");
  return result;
};

export const SessionModel = {
  findAll,
};
