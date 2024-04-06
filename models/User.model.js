import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = `SELECT * FROM public."User" WHERE user_id = $1;`;
  const values = [id];
  return await pool.query(query, values);
};

// TODO: Add username column and check if username is already used.

export const UserModel = {
  findById,
};
