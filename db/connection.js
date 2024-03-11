import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

// pools will use environment variables
// for connection information
export const pool = new Pool({
  allowExitOnIdle: true,
});

try {
  await pool.query("SELECT NOW()");
  console.log("DATABASE CONNECTED");
} catch (error) {
  console.log(error);
}

// const url = "https://exercisedb.p.rapidapi.com/exercises?limit=50001";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a8b0f51faemsh9a81291c1530c1ap10bd70jsn16a039cdc29d",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// async function fetchDataAndInsert() {
//   try {
//     // Fetching data from API
//     const response = await fetch(url, options);
//     const exercises = await response.json();

//     // Insert each exercise into the database
//     for (const exercise of exercises) {
//       const query = `
//         INSERT INTO exercises (exercise_id, name, body_part, equipment, gif_url, target, secondary_muscles, instructions)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//       `;

//       const values = [
//         exercise.id,
//         exercise.name,
//         exercise.bodyPart,
//         exercise.equipment,
//         exercise.gifUrl,
//         exercise.target,
//         exercise.secondaryMuscles, // Assuming this is an array
//         exercise.instructions, // Assuming this is an array
//       ];

//       await pool.query(query, values);
//     }

//     console.log("All exercises inserted into the database");
//   } catch (error) {
//     console.error("Error occurred:", error);
//   }
// }

// fetchDataAndInsert();
