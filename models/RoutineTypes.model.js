import { pool } from "../db/connection.js";

const findById = async (id) => {
  const query = "SELECT * FROM routinetype WHERE routinetype_id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  console.log(result);
  return result;
};

const findAll = async () => {
  const query = "SELECT * FROM routinetype";
  return await pool.query(query);
};

const deleteById = async (id) => {
  const query = "DELETE FROM routinetype WHERE routinetype_id = $1";
  const values = [id];
  return await pool.query(query, values);
};

const create = async (systemData) => {
  const values = ["name", "description", "icon_url"].map(
    (key) => systemData[key]
  );
  const query = `
    INSERT INTO routinetype (name, description, icon_url)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  return await pool.query(query, values);
};

const update = async (systemData) => {
  const values = ["name", "description", "icon_url", "routinetype_id"].map(
    (key) => systemData[key]
  );
  const query = `
    UPDATE routinetype 
    SET 
      name = $1, 
      description = $2,
      icon_url = $3
    WHERE routinetype_id = $4
    RETURNING *;
  `;

  return await pool.query(query, values);
};

export const RoutineTypesModel = {
  findById,
  findAll,
  deleteById,
  create,
  update,
};
