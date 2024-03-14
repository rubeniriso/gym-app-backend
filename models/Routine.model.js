import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routines WHERE routine_id = $1;";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByUser = async (userId) => {
  const query = "SELECT * FROM routines WHERE user_id = $1;";
  const values = [userId];
  const result = await pool.query(query, values);
  return result;
};

export const RoutineModel = {
  findById,
  findByUser,
};
