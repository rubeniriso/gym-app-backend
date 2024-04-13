import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;
import { initialData } from "./initialData.js";

// pools will use environment variables
// for connection information
export const pool = new Pool({
  allowExitOnIdle: true,
});

try {
  await pool.query("SELECT NOW()");
  console.log("DATABASE CONNECTED");
  insertInitialData();
} catch (error) {
  console.log(error);
}
async function insertInitialData() {
  console.log("data insert");
  const query2 = `
      SELECT count(bodypart_id)
      FROM bodypart
    `;
  const result = await pool.query(query2);
  if (result.rows[0]["count"] != 0) {
    console.log("skipping data insert");
    return;
  }
  console.log("inserting data");
  try {
    await pool.query(initialData.getInitialDataQuery());
    console.log("inserted data");
  } catch (error) {
    console.log(error);
  }
}
async function fetchExerciseDataAndInsert() {
  console.log("Inserting Exercise data");
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=50001";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a8b0f51faemsh9a81291c1530c1ap10bd70jsn16a039cdc29d",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const query2 = `
      SELECT count(exercise_id)
      FROM exercise
    `;
    const result = await pool.query(query2);
    if (result.rows[0]["count"] != 0) return;
    // Fetching data from API
    const response = await fetch(url, options);
    const exercises = await response.json();

    // Insert each exercise into the database
    for (const exercise of exercises) {
      const query = `
        INSERT INTO exercise (exercise_id, name, body_part, equipment, gif_url, target, secondary_muscles, instructions)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;

      const values = [
        exercise.id,
        exercise.name,
        exercise.bodyPart,
        exercise.equipment,
        exercise.gifUrl,
        exercise.target,
        exercise.secondaryMuscles, // Assuming this is an array
        exercise.instructions, // Assuming this is an array
      ];

      await pool.query(query, values);
    }

    console.log("All exercises inserted into the database");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
