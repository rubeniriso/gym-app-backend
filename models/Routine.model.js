import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routine WHERE routine_id = $1;";
  const values = [id];
  return await pool.query(query, values);
};

const findAllByUser = async (userId) => {
  const query = `
    SELECT routine.*, routinetype.icon_url, routinetype.icon_alt_text
    FROM routine
    JOIN routinetype ON routine.routinetype_id = routinetype.routinetype_id
    WHERE user_id = $1;
  `;
  const values = [userId];
  return await pool.query(query, values);
};

const create = async (user_id, routineData) => {
  const values = ["name", "description", "routinetype_id"].map(
    (key) => routineData[key]
  );
  values.push(user_id);
  const query = `
      INSERT INTO routine
      (name, description, routinetype_id, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
  return await pool.query(query, values);
};
const update = async (routine_id, routineData) => {
  const values = ["name", "description", "routinetype_id"].map(
    (key) => routineData[key]
  );
  values.push(routine_id);
  const query = `
      UPDATE routine
      SET
        name = $1,
        description = $2,
        routinetype_id = $3
      WHERE routine_id = $4
      RETURNING *;
    `;
  return await pool.query(query, values);
};
const copy = async (routine_id) => {
  const values = [routine_id];
  const query = `
  INSERT INTO routines (name, description, user_id, routinetype_id)
  SELECT routine_id, name, description, user_id, routinetype_id
  FROM routines
  WHERE routine_id = $1;`;
  return await pool.query(query, values);
};
const deleteById = async (id) => {
  const query = "DELETE FROM routine WHERE routine_id = $1";
  const values = [id];
  try {
    const result = await pool.query(query, values);
    if (result.rowCount > 0) {
      return { success: true };
    } else {
      return { success: false, message: "Not found." };
    }
  } catch (error) {
    throw new Error("Server error");
  }
};

export const RoutineModel = {
  findById,
  findAllByUser,
  create,
  update,
  deleteById,
};
