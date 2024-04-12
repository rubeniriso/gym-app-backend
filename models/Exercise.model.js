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

const findByBodyPart = async (bodyPart) => {
  const query =
    "SELECT * FROM exercise where body_part  ILIKE '%' || $1 || '%';";
  const values = [bodyPart];
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
  findByBodyPart,
  findByEquipment,
  findAll,
};
