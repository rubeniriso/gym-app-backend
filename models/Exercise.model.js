import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM exercises where exercise_id = $1;";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByName = async (name) => {
  const query = "SELECT * FROM exercises where name  ILIKE '%' || $1 || '%';";
  const values = [name];
  const result = await pool.query(query, values);
  return result;
};

const findByBodyPart = async (bodyPart) => {
  const query =
    "SELECT * FROM exercises where body_part  ILIKE '%' || $1 || '%';";
  const values = [bodyPart];
  const result = await pool.query(query, values);
  return result;
};

const findByEquipment = async (equipment) => {
  const query =
    "SELECT * FROM exercises where equipment  ILIKE '%' || $1 || '%';";
  const values = [equipment];
  const result = await pool.query(query, values);
  return result;
};

export const ExerciseModel = {
  findById,
  findByName,
  findByBodyPart,
  findByEquipment,
};
