-- Insert data into Users table
INSERT INTO Users (name, email, password) VALUES
('John Doe', 'john@example.com', 'password123'),
('Jane Smith', 'jane@example.com', 'securepass');

-- Insert data into Exercises table
INSERT INTO Exercises (name, description, img_url) VALUES
('Push-up', 'Bodyweight exercise targeting the chest, shoulders, and triceps.', 'https://example.com/push-up.jpg'),
('Squat', 'Compound exercise targeting the quadriceps, hamstrings, and glutes.', 'https://example.com/squat.jpg');

-- Insert data into Routines table
INSERT INTO Routines (name, description, user_id) VALUES
('Full Body Workout', 'A routine targeting all major muscle groups.', 1),
('Leg Day', 'A routine focusing on lower body exercises.', 2);

-- Insert data into Weeks table
INSERT INTO Weeks (name, description, routine_id) VALUES
('Week 1', 'First week of the routine', 1),
('Week 1', 'First week of the routine', 2);

-- Insert data into Sessions table
INSERT INTO Sessions (name, description, week_id) VALUES
('Monday Session', 'Session for Monday', 1),
('Monday Session', 'Session for Monday', 2);

-- Insert data into SessionExercise table
INSERT INTO SessionExercise (name, sets, reps, weight, rir, session_id, exercise_id) VALUES
('Push-up', 3, 10, NULL, NULL, 1, 1),
('Squat', 3, 12, 50, 2, 1, 2);