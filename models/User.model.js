import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM users WHERE user_id = $1;";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const createUser = async (name, email, hashedPassword) => {
  const newUser = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hashedPassword]
  );
  return newUser;
};

const emailExists = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1;";
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows.length > 0;
};

// TODO: Add username column and check if username is already used.

export const UserModel = {
  findById,
  createUser,
  emailExists,
};
