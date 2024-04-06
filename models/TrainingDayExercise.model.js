import { pool } from "../db/connection.js";

const findByTrainingDayId = async (trainingDayId) => {
  const query =
    "SELECT * FROM trainingdayexercise WHERE trainingdayexercise_id = $1;";
  const values = [trainingDayId];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (trainingDayId) => {
  const query =
    "DELETE FROM trainingdayexercise WHERE trainingdayexercise_id = $1;";
  const values = [trainingDayId];
  const result = await pool.query(query, values);
  return result;
};

const create = async (trainingDayExerciseData) => {
  const values = [
    "name",
    "sets",
    "reps",
    "weight",
    "rir",
    "session_id",
    "exercise_id",
  ].map((key) => trainingDayExerciseData[key]);
  const query = `
      INSERT INTO trainingdayexercise
      (name, sets, reps, weight, rir, trainingday_id, exercise_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `;
  return await pool.query(query, values);
};

export const TrainingDayExerciseModel = {
  findByTrainingDayId,
  deleteById,
  create,
};
