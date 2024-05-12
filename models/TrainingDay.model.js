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
    console.log("got here");
    // Construct the values string for all exercises
    const values = trainingDayExerciseData.exerciseData
      .map(
        (exerciseData) =>
          `(${exerciseData.trainingDayExerciseId}, 
        ${exerciseData}, 
        ${exerciseData.bodyPart}, 
        ${exerciseData.muscle}, 
        ${exerciseData.exercise}, 
        ${exerciseData.sets}, 
        ${exerciseData.reps}, 
        ${exerciseData.weight}, 
        ${exerciseData.rir})`
      )
      .join(", ");

    // Merge operation using a single SQL query
    await pool.query(`
      MERGE INTO trainingdayexercise AS target
      USING (VALUES ${values}) AS source (trainingdayexercise_id, bodypart_id, muscle_id, exercise_id, sets, reps, weight, rir)
      ON target.trainingdayexercise_id = source.trainingdayexercise_id
      WHEN MATCHED THEN
        UPDATE SET
          bodypart_id = source.bodypart_id,
          muscle_id = source.muscle_id,
          exercise_id = source.exercise_id,
          sets = source.sets,
          reps = source.reps,
          weight = source.weight,
          rir = source.rir
      WHEN NOT MATCHED THEN
        INSERT (trainingdayexercise_id, trainingday_id, bodypart_id, muscle_id, exercise_id, sets, reps, weight, rir)
        VALUES (source.trainingdayexercise_id, ${trainingday_id}, source.bodypart_id, source.muscle_id, source.exercise_id, source.sets, source.reps, source.weight, source.rir);
    `);

    await pool.query("COMMIT");
  } catch (error) {
    await pool.query("ROLLBACK");
    throw error;
  }
  return await pool.query(query, values);
};

export const TrainingDayModel = {
  findById,
  findByWeekId,
  deleteById,
  create,
  update,
  updateExercises,
};
