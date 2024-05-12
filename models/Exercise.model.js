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
  const query = `SELECT DISTINCT e.*
  FROM exercise e
  JOIN muscleexercise me ON e.exercise_id = me.exercise_id
  WHERE me.muscle_id = ANY($1);`;
  const values = [body.muscles];
  const result = await pool.query(query, [values]);
  return result;
};

const findByBodyPartId = async (bodypart_id) => {
  const query = `SELECT DISTINCT e.exercise_id, e.name, e.instructions
      FROM exercise e
      INNER JOIN muscleexercise me ON me.exercise_id = e.exercise_id
      INNER JOIN muscle m ON me.muscle_id = m.muscle_id
      WHERE e.bodypart_id = $1;`;
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

const findFiltered = async (filters) => {
  let values = [];
  let count = 0;
  let query = `SELECT DISTINCT e.exercise_id, e.name, e.instructions
      FROM exercise e
      LEFT JOIN muscleexercise me ON me.exercise_id = e.exercise_id
      LEFT JOIN muscle m ON me.muscle_id = m.muscle_id 
      WHERE `;
  if (filters.muscles.length > 0) {
    count += 1;
    query += `me.muscle_id = ANY($${count}) OR `;
    values.push(filters.muscles);
  }

  if (filters.bodyparts.length > 0) {
    count += 1;
    query += `m.bodypart_id = ANY($${count}) OR `;
    values.push(filters.bodyparts);
  }

  if (values.length > 0) {
    query = query.slice(0, -4);
  } else {
    query = query.slice(0, -6);
  }
  const result = await pool.query(query, values);
  return result;
};
const findAllFilters = async () => {
  let query = `SELECT m.muscle_id, m.name, COUNT(DISTINCT me.exercise_id) as exercise_count
      FROM muscle m 
      INNER JOIN muscleexercise me ON me.muscle_id = m.muscle_id
      GROUP BY m.muscle_id
      ORDER BY name asc;`;
  let result = await pool.query(query);
  const muscles = result.rows;

  query = `SELECT bp.bodypart_id, bp.name, count(DISTINCT me.exercise_id) as exercise_count
      FROM bodypart bp
      INNER JOIN muscle m ON m.bodypart_id = bp.bodypart_id
      INNER JOIN muscleexercise me on m.muscle_id = me.muscle_id
      GROUP BY bp.bodypart_id;`;
  result = await pool.query(query);
  const bodyparts = result.rows;

  const finalJson = {
    bodyparts: bodyparts.reduce((acc, bodypart) => {
      acc[bodypart.bodypart_id] = {
        name: bodypart.name,
        exercise_count: bodypart.exercise_count,
      };
      return acc;
    }, {}),
    muscles: muscles.reduce((acc, muscle) => {
      acc[muscle.muscle_id] = {
        name: muscle.name,
        exercise_count: muscle.exercise_count,
      };
      return acc;
    }, {}),
  };
  return finalJson;
};
export const ExerciseModel = {
  findById,
  findByName,
  findExerciseByMuscles,
  findByBodyPartId,
  findByEquipment,
  findAll,
  findFiltered,
  findAllFilters,
};
