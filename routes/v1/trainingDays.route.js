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

export default router;
