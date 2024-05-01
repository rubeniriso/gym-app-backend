import { pool } from "../db/connection.js";

const findByTrainingDayId = async (trainingDayId) => {
  const query = "SELECT * FROM trainingdayexercise WHERE trainingday_id = $1;";
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

const create = async (trainingday_id, trainingDayExerciseData) => {
  const values = ["sets", "reps", "weight", "rir", "exercise_id"].map(
    (key) => trainingDayExerciseData[key]
  );
  values.push(trainingday_id);
  const query = `
      INSERT INTO trainingdayexercise
      (sets, reps, weight, rir, exercise_id, trainingday_id)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
  return await pool.query(query, values);
};

export const TrainingDayExerciseModel = {
  findByTrainingDayId,
  deleteById,
  create,
};
