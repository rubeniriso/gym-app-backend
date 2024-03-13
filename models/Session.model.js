import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * from sessions WHERE session_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const findByWeekId = async (id) => {
  const query = "SELECT * from sessions WHERE week_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

const deleteById = async (id) => {
  // TODO: tener en cuenta posible constraint con el id de la session borrada en exerciseseession.
  const query = "DELETE from sessions WHERE session_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result;
};

export const SessionModel = {
  findById,
  findByWeekId,
  deleteById,
};
