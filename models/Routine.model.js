import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routines WHERE routine_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const findAllByUser = async (userId) => {
  const query = "SELECT * FROM routines WHERE user_id = $1;";
  const values = [userId];
  return await pool.query(query, values);
};

const create = async (routineData) => {
  const values = ['name', 'description', 'userId'].map(key => routineData[key]);
  const query = `
      INSERT INTO routines
      (name, description, user_id)
      VALUES ($1, $2, $3) RETURNING *;
    `;
  return await pool.query(query, values);
};

export const RoutineModel = {
  findById,
  findAllByUser,
  create
};
