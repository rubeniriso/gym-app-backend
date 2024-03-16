import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM weeks WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findAllByRoutineId = async (id) => {
  const query = "SELECT * FROM weeks WHERE routine_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (id) => {
  const query = "DELETE FROM weeks WHERE week_id = $1";
  const values = [id];
  return await pool.query(query, values);
};

const create = async (weekData) => {
  const query = `
    INSERT INTO weeks (routine_id, name, description)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [weekData.routine_id, weekData.name, weekData.description];
  return await pool.query(query, values);
};

export const WeekModel = {
  findById,
  findAllByRoutineId,
  deleteById,
  create,
};
