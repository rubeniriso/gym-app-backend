BEGIN;
WITH new_routine AS (
    INSERT INTO routine (name, description, user_id, routinetype_id)
    SELECT CONCAT(name, '_copy'), description, user_id, routinetype_id
    FROM routine
    WHERE routine_id = 'b51082e9-1547-4066-aab3-b0123a903862'
    RETURNING routine_id
),
new_weeks AS (
    INSERT INTO week (routine_id, name, description)
    SELECT nr.routine_id, w.name, w.description
    FROM week w, new_routine nr
    WHERE w.routine_id = 'b51082e9-1547-4066-aab3-b0123a903862'
    RETURNING week_id, routine_id
), 
-- Step 3: Duplicate Training Days
new_training_days AS (
    INSERT INTO trainingday(week_id, name, description)
    SELECT nw.week_id, td.name, td.description
    FROM trainingday td
	JOIN week w on td.week_id = w.week_id
	JOIN new_weeks nw on w.routine_id = nw.routine_id 
    WHERE td.week_id IN (SELECT week_id FROM week WHERE routine_id = 'b51082e9-1547-4066-aab3-b0123a903862')
    RETURNING *
) select * from new_training_days
INSERT INTO trainingdayexercise (trainingday_id, exercise_id, name, sets, reps, weight, rir)
SELECT ntd.training_day_id, tde.exercise_id, tde.name, tde.sets, tde.reps, tde.weight, tde.rir
FROM trainingdayexercise tde
JOIN trainingday td ON td.training_day_id = tde.training_day_id
JOIN new_training_days ntd ON ntd.training_day_id = td.training_day_id
WHERE td.week_id IN (SELECT week_id FROM new_weeks)
COMMIT;
END;
