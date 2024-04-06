import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * from trainingday WHERE trainingday_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByWeekId = async (id) => {
  const query = "SELECT * from trainingday WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (id) => {
  // TODO: tener en cuenta posible constraint con el id de la session borrada en trainingdayexercise.
  const query = "DELETE from trainingday WHERE trainingday_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

export const TrainingDayModel = {
  findById,
  findByWeekId,
  deleteById,
};
