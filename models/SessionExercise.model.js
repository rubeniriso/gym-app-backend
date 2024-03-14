import { pool } from "../db/connection.js";

const findBySessionId = async (sessionId) => {
  const query = "SELECT * FROM sessionexercise WHERE session_id = $1;";
  const values = [sessionId];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (sessionId) => {
  const query = "DELETE FROM sessionexercise WHERE sessionexercise_id = $1;";
  const values = [sessionId];
  const result = await pool.query(query, values);
  return result;
};

const create = async (sessionExerciseData) => {
  const { name, sets, reps, weight, rir, session_id, exercise_id } =
    sessionExerciseData;
  const query = `
      INSERT INTO sessionexercise
      (name, sets, reps, weight, rir, session_id, exercise_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `;
  const values = [name, sets, reps, weight, rir, session_id, exercise_id];
  const result = await pool.query(query, values);
};

export const SessionExerciseModel = {
  findBySessionId,
  deleteById,
  create,
};
