import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routines WHERE routine_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const findAllByUser = async (userId) => {
  const query = `
    SELECT routines.*, routinetypes.icon_url
    FROM routines
    JOIN routinetypes ON routines.routinetype_id = routinetypes.routinetype_id
    WHERE user_id = $1;
  `;
  const values = [userId];
  return await pool.query(query, values);
};

const create = async (user_id, routineData) => {
  const values = ['name', 'description', 'routinetype_id'].map(key => routineData[key]);
  values.push(user_id)
  const query = `
      INSERT INTO routines
      (name, description, routinetype_id, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
  return await pool.query(query, values);
};
const update = async (routineData) => {
  const values = ['name', 'description', 'routinetype_id', 'routine_id'].map(key => routineData[key]);
  const query = `
      UPDATE routines
      SET
        name = $1,
        description = $2,
        routinetype_id = $3
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
