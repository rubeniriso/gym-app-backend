const pgp = require("pg-promise")(/* options */);
const db = pgp(
  "postgres://default:CqLKY3X0NcJE@ep-floral-frog-a2tl7heu-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
);
var createTables = `
-- Create Users table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create Exercises table
CREATE TABLE Exercises (
    exercise_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    img_url VARCHAR(255)
);

-- Create Routines table
CREATE TABLE Routines (
    routine_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Create Weeks table
CREATE TABLE Weeks (
    week_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    routine_id INTEGER REFERENCES Routines(routine_id) ON DELETE CASCADE
);

-- Create Sessions table
CREATE TABLE Sessions (
    session_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    week_id INTEGER REFERENCES Weeks(week_id) ON DELETE CASCADE
);

-- Create SessionExercise table
CREATE TABLE SessionExercise (
    sessionexercise_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    sets INTEGER,
    reps INTEGER,
    weight INTEGER,
    rir INTEGER,
    session_id INTEGER REFERENCES Sessions(session_id) ON DELETE CASCADE,
    exercise_id INTEGER REFERENCES Exercises(exercise_id) ON DELETE CASCADE
);
  `;

db.one(createTables, 123)
  .then((data) => {
    console.log("DATA:", data.value);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
