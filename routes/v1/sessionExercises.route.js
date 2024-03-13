import { Router } from "express";
import { exerciseSessionController } from "../../controllers/sessionExercise.controller.js";

const router = Router();

/**
 * @swagger
 * /api/v1/sessionexercise/{session_id}:
 *   get:
 *     tags:
 *       - SessionExercise
 *     summary: Get a SessionExercise by session ID
 *     description: Retrieve details of the exercises for a specific session.
 *     parameters:
 *       - in: path
 *         name: session_id
 *         required: true
 *         description: Unique identifier of the session.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the session exercise.
 *       404:
 *         description: SessionExercise not found.
 */
router.get(
  "/:session_id",
  exerciseSessionController.findExercisesBySessionById
);

/**
 * @swagger
 * /api/v1/sessionexercise/{sessionexercise_id}:
 *   delete:
 *     tags:
 *       - SessionExercise
 *     summary: Delete a SessionExercise by ID
 *     description: Delete a specific session exercise using its ID.
 *     parameters:
 *       - in: path
 *         name: sessionexercise_id
 *         required: true
 *         description: Unique identifier of the session exercise to be deleted.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: SessionExercise successfully deleted.
 *       404:
 *         description: SessionExercise not found or could not be deleted.
 */
router.delete(
  "/:sessionexercise_id",
  exerciseSessionController.deleteSessionExercise
);

/**
 * @swagger
 * /api/v1/sessionexercise/create:
 *   post:
 *     tags:
 *       - SessionExercise
 *     summary: Create a new SessionExercise
 *     description: Create a new session exercise with the provided session and exercise details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               sets:
 *                 type: integer
 *               reps:
 *                 type: integer
 *               weight:
 *                 type: number
 *                 format: float
 *               rir:
 *                 type: integer
 *               session_id:
 *                 type: integer
 *               exercise_id:
 *                 type: integer
 *             required:
 *               - name
 *               - sets
 *               - reps
 *               - weight
 *               - rir
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
router.post("/create", exerciseSessionController.createSessionExercise);
export default router;
