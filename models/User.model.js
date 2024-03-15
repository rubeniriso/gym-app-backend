import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM users WHERE user_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const create = async (name, email, hashedPassword) => {
  const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *"
  values = [name, email, hashedPassword]
  return await pool.query(query, values);
};

const emailExists = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1;";
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows.length > 0;
};

const makeRoutineActive = async (routineData) => {
  const values = ['routineId', 'userId'].map(key => routineData[key]);
  const query = `UPDATE users
    SET activeroutine_id = $1
    WHERE user_id = $2`
  return await pool.query(query, values)
}

// TODO: Add username column and check if username is already used.

export const UserModel = {
  findById,
  create,
  emailExists,
  makeRoutineActive
};
