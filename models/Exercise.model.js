import { pool } from "../db/connection.js";

const findAll = async () => {
  const query = "SELECT * FROM exercise";
  const result = await pool.query(query);
  return result;
};

const findById = async (id) => {
  const query = "SELECT * FROM exercise where exercise_id = $1;";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByName = async (name) => {
  const query = "SELECT * FROM exercise where name  ILIKE '%' || $1 || '%';";
  const values = [name];
  const result = await pool.query(query, values);
  return result;
};

const findExerciseByMuscles = async (body) => {
  console.log(body.muscles);
  const query = `SELECT DISTINCT e.*
  FROM exercise e
  JOIN muscleexercise me ON e.exercise_id = me.exercise_id
  WHERE me.muscle_id = ANY($1);`;
  const values = [body.muscles];
  const result = await pool.query(query, [values]);
  return result;
};

const findByBodyPartId = async (bodypart_id) => {
  const query = `SELECT e.exercise_id, e.name 
      FROM exercise e
      INNER JOIN muscleexercise me ON me.exercise_id = e.exercise_id
      INNER JOIN muscle m ON me.muscle_id = m.muscle_id
      WHERE bodypart_id = $1;`;
  const values = [bodypart_id];
  const result = await pool.query(query, values);
  return result;
};

const findByEquipment = async (equipment) => {
  const query =
    "SELECT * FROM exercise where equipment  ILIKE '%' || $1 || '%';";
  const values = [equipment];
  const result = await pool.query(query, values);
  return result;
};

export const ExerciseModel = {
  findById,
  findByName,
  findExerciseByMuscles,
  findByBodyPartId,
  findByEquipment,
  findAll,
};
