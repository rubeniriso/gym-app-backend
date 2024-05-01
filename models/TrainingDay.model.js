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

const create = async (week_id, trainingDayData) => {
  const query = `
    INSERT INTO trainingday (name, description, week_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [trainingDayData.name, trainingDayData.description, week_id];
  return await pool.query(query, values);
};

export const TrainingDayModel = {
  findById,
  findByWeekId,
  deleteById,
  create,
};
