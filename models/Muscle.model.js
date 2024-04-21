import { pool } from "../db/connection.js";

const findAllByBodypartId = async (id) => {
  const query = "SELECT * FROM muscle WHERE bodypart_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

export const MuscleModel = {
  findAllByBodypartId,
};
