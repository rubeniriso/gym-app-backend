import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routines WHERE routine_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const findAllByUser = async (userId) => {
  const query = `
    SELECT routines.*, routinetypes.icon_url, routinetypes.icon_alt_text
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
const update = async (routine_id, routineData) => {
  const values = ['name', 'description', 'routinetype_id'].map(key => routineData[key]);
  values.push(routine_id)
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
const deleteById = async (id) => {
  const query = "DELETE FROM routines WHERE routine_id = $1";
  const values = [id];
  try {
    const result = await pool.query(query, values);
    if (result.rowCount > 0) {
      return { success: true };
    } else {
      return { success: false, message: 'Not found.' };
    }
  } catch (error) {
      throw new Error('Server error');
  }
};

export const RoutineModel = {
  findById,
  findAllByUser,
  create,
  update,
  deleteById
};
