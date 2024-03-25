import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM users WHERE user_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const create = async (name, email, hashedPassword) => {
  const values = [name, email, hashedPassword]
  const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *"
  return await pool.query(query, values);
};

const emailExists = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1;";
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows.length > 0;
};

const makeRoutineActive = async (routineData) => {
  const activeRoutine = await getActiveRoutine(routineData.userId)
  var values, query;
  if (activeRoutine == routineData.routineId){
    values = ['userId'].map(key => routineData[key]);
    query = `UPDATE users
    SET activeroutine_id = null
    WHERE user_id = $1
    RETURNING activeroutine_id`
  } else{
    values = ['routineId', 'userId'].map(key => routineData[key]);
    query = `UPDATE users
    SET activeroutine_id = $1
    WHERE user_id = $2
    RETURNING activeroutine_id`
  }
  return await pool.query(query, values)
}

const getActiveRoutine = async (user_id) => {
  const values = [user_id]
  const query = `SELECT activeroutine_id
    FROM users
    WHERE user_id = $1
    `
  const result = await pool.query(query, values)
  return result.rows[0]['activeroutine_id']
}


// TODO: Add username column and check if username is already used.

export const UserModel = {
  findById,
  create,
  emailExists,
  makeRoutineActive,
  getActiveRoutine
};
