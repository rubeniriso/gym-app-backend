import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * from trainingday WHERE trainingday_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByWeekId = async (id) => {
  const query =
    "SELECT * from trainingday WHERE week_id = $1 ORDER BY order_ ASC";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (id) => {
  // TODO: tener en cuenta posible constraint con el id de la session borrada en trainingdayexercise.
  const query =
    "DELETE from trainingday WHERE trainingday_id = $1 RETURNING *;";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const create = async (week_id, trainingDayData) => {
  const query = `
    INSERT INTO trainingday (name, description, week_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [trainingDayData.name, trainingDayData.description, week_id];
  return await pool.query(query, values);
};

const update = async (trainingday_id, trainingDayData) => {
  const values = ["name", "description"].map((key) => trainingDayData[key]);
  values.push(trainingday_id);
  const query = `
      UPDATE trainingday
      SET
        name = $1,
        description = $2
      WHERE trainingday_id = $3
      RETURNING *;
    `;
  return await pool.query(query, values);
};
const updateExercises = async (trainingday_id, trainingDayExerciseData) => {
  try {
    await pool.query("BEGIN");
    for (const exerciseData of trainingDayExerciseData.exerciseData) {
      const { trainingDayExerciseId, exercise, sets, reps, weight, rir } =
        exerciseData;
      // Execute UPDATE statement for each exercise
      await pool.query(
        `
        UPDATE trainingdayexercise
        SET 
            exercise_id = $2,
            sets = $3,
            reps = $4,
            weight = $5,
            rir = $6
        WHERE trainingdayexercise_id = $1;
      `,
        [trainingDayExerciseId, exercise, sets, reps, weight, rir]
      );
    }
    await pool.query("COMMIT");
    return true;
  } catch (error) {
    await pool.query("ROLLBACK");
    throw error;
  }
  return;
};

export const TrainingDayModel = {
  findById,
  findByWeekId,
  deleteById,
  create,
  update,
  updateExercises,
};
