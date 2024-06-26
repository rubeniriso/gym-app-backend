import { Router } from "express";
import { trainingDayController } from "../../controllers/trainingDay.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/trainingDays/{trainingday_id}:
 *   get:
 *     tags:
 *       - TrainingDays
 *     summary: Return the trainingday with given ID
 *     description: Retrieve a trainingday for given ID.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Unique identifier of the trainingday.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: TrainingDay details.
 *       404:
 *         description: TrainingDay not found.
 */
router.get("/:trainingday_id", trainingDayController.findById);

/**
 * @swagger
 * /api/v1/trainingDays/week/{week_id}:
 *   get:
 *     tags:
 *       - TrainingDays
 *     summary: Retrieve trainingDays for a given Week ID
 *     description: Retrieve all trainingDays associated with a given week ID.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Unique identifier of the week to retrieve trainingDays for.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of trainingday details for the given week ID.
 *       404:
 *         description: No trainingDays found for the given week ID.
 */
router.get("/week/:week_id", trainingDayController.findByWeekId);

/**
 * @swagger
 * /api/v1/trainingDays/{trainingday_id}:
 *   delete:
 *     tags:
 *       - TrainingDays
 *     summary: Delete the trainingday with given ID
 *     description: Delete a specific trainingday using its unique identifier.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Unique identifier of the trainingday to be deleted.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: TrainingDay successfully deleted.
 *       404:
 *         description: TrainingDay not found or could not be deleted.
 */
router.delete("/:trainingday_id", trainingDayController.deleteById);

/**
 * @swagger
 * /api/v1/trainingDays/create/{week_id}:
 *   post:
 *     tags:
 *       - TrainingDays
 *     summary: Create a new TrainingDay
 *     description: Creates a new trainingDay with the given details.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Identifier of the week.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New week successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.post("/create/:week_id", trainingDayController.create);

/**
 * @swagger
 * /api/v1/trainingDays/update/{trainingday_id}:
 *   put:
 *     tags:
 *       - TrainingDays
 *     summary: Updates a training day
 *     description: Updates a Training day with a specific training day ID.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Identifier of the training day to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The training day was succesfully updated.
 *       400:
 *         description: Some values are wrong.
 */
router.put("/update/:trainingday_id", trainingDayController.update);
/**
 * @swagger
 * /api/v1/trainingDays/update/{trainingday_id}:
 *   put:
 *     tags:
 *       - TrainingDays
 *     summary: Updates a training day
 *     description: Updates a Training day with a specific training day ID.
 *     parameters:
 *       - in: path
 *         name: trainingday_id
 *         required: true
 *         description: Identifier of the training day to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 bodyPart:
 *                   type: string
 *                 exercise:
 *                   type: string
 *                 muscle:
 *                   type: string
 *                 reps:
 *                   type: integer
 *                 sets:
 *                   type: integer
 *                 rir:
 *                   type: integer
 *                 trainingDayExerciseId:
 *                   type: string
 *                 weight:
 *                   type: float
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The training day was succesfully updated.
 *       400:
 *         description: Some values are wrong.
 */
router.post(
  "/update/exercises/:trainingday_id",
  trainingDayController.updateExercises
);
export default router;
