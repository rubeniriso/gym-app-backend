import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routines WHERE routine_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const findAllByUser = async (userId) => {
  const query = `
    SELECT routines.*, systems.icon_url
    FROM routines
    JOIN systems ON routines.system_id = systems.system_id
    WHERE user_id = $1;
  `;
  const values = [userId];
  return await pool.query(query, values);
};

const create = async (routineData) => {
  const values = ['name', 'description', 'user_id'].map(key => routineData[key]);
  const query = `
      INSERT INTO routines
      (name, description, user_id, system_id)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
  return await pool.query(query, values);
};
const update = async (routineData) => {
  const values = ['name', 'description', 'system_id', 'routine_id'].map(key => routineData[key]);
  const query = `
      UPDATE routines
      SET
        name = $1,
        description = $2,
        system_id = $3
      WHERE routine_id = $4
      RETURNING *;
    `;
  return await pool.query(query, values);
};


export const RoutineModel = {
  findById,
  findAllByUser,
  create,
  update
};
