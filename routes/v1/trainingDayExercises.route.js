import { Router } from "express";
import { trainingDayExerciseController } from "../../controllers/trainingDayExercise.controller.js";

const router = Router();

/**
 * @swagger
 * /api/v1/trainingdayexercises/{trainingday_id}:
 *   get:
 *     tags:
 *       - TrainingDayExercise
 *     summary: Get a TrainingDayExercise by Training Day ID
 *     description: Retrieve details of the exercises for a specific Training Day.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Unique identifier of the Training Day.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the Training Day exercise.
 *       404:
 *         description: TrainingDayExercise not found.
 */
router.get(
  "/:trainingday_id",
  trainingDayExerciseController.findByTrainingDayId
);

/**
 * @swagger
 * /api/v1/trainingdayexercises/{trainingdayexercise_id}:
 *   delete:
 *     tags:
 *       - TrainingDayExercise
 *     summary: Delete a TrainingDayExercise by ID
 *     description: Delete a specific session exercise using its ID.
 *     parameters:
 *       - in: path
 *         name: trainingdayexercise_id
 *         required: true
 *         description: Unique identifier of the session exercise to be deleted.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: TrainingDayExercise successfully deleted.
 *       404:
 *         description: TrainingDayExercise not found or could not be deleted.
 */
router.delete(
  "/:trainingdayexercise_id",
  trainingDayExerciseController.deleteById
);

/**
 * @swagger
 * /api/v1/trainingdayexercises/create/trainingday/{trainingday}:
 *   post:
 *     tags:
 *       - TrainingDayExercise
 *     summary: Create a new TrainingDayExercise
 *     description: Create a new Training day exercise with the provided training day and exercise details.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Unique identifier of the training day.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sets:
 *                 type: integer
 *               reps:
 *                 type: integer
 *               weight:
 *                 type: number
 *                 format: float
 *               rir:
 *                 type: integer
 *               exercise_id:
 *                 type: string
 *             required:
 *               - session_id
 *               - exercise_id
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New session exercise created successfully.
 *       400:
 *         description: Invalid input, object invalid.
 */
router.post(
  "/create/trainingday/:trainingday_id",
  trainingDayExerciseController.create
);
export default router;
