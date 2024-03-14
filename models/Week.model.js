import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM weeks WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByRoutineId = async (id) => {
  const query = "SELECT * FROM weeks WHERE routine_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (id) => {
  const query = "DELETE FROM weeks WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const create = async (routineId, name, description) => {
  const query = `
    INSERT INTO weeks (routine_id, name, description)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [routineId, name, description];
  const result = await pool.query(query, values);
  return result;
};

export const WeekModel = {
  findById,
  findByRoutineId,
  deleteById,
  create,
};
