import { pool } from "../db/connection.js";
const getUserSettings = async (userId) => {
  const values = [userId];
  const query = `SELECT count(id)
	FROM usersettings
  WHERE user_id = $1`;
  const result = await pool.query(query, values);
  return result.rows[0]["count"] > 0;
};
const createUserSettings = async (userId) => {
  const values = [userId];
  if (!(await getUserSettings(userId))) {
    const query = `INSERT INTO usersettings(
      user_id)
      VALUES ($1);
      `;
    await pool.query(query, values);
    return true;
  } else return false;
};

const makeRoutineActive = async (routineData) => {
  const activeroutine = await getActiveRoutine(routineData.userId);
  var values, query;
  if (activeroutine == routineData.routineId) {
    values = ["userId"].map((key) => routineData[key]);
    query = `UPDATE usersettings
    SET activeroutine = null
    WHERE user_id = $1
    RETURNING activeroutine`;
  } else {
    values = ["routineId", "userId"].map((key) => routineData[key]);
    query = `UPDATE usersettings
    SET activeroutine = $1
    WHERE user_id = $2
    RETURNING activeroutine`;
  }
  return await pool.query(query, values);
};

const getActiveRoutine = async (user_id) => {
  const values = [user_id];
  console.log(user_id);
  const query = `SELECT activeroutine
    FROM usersettings
    WHERE user_id = $1
    `;
  const result = await pool.query(query, values);
  console.log(result);
  return result.rows[0]["activeroutine"];
};

// TODO: Add username column and check if username is already used.

export const UserSettingsModel = {
  makeRoutineActive,
  getActiveRoutine,
  createUserSettings,
};
