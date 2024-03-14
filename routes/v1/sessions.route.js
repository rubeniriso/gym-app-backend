import { Router } from "express";
import { sessionController } from "../../controllers/sessions.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/sessions/{session_id}:
 *   get:
 *     tags:
 *       - Sessions
 *     summary: Return the session with given ID
 *     description: Retrieve a session for given ID.
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
 *         description: Session details.
 *       404:
 *         description: Session not found.
 */
router.get("/:session_id", sessionController.findSessionById);

/**
 * @swagger
 * /api/v1/sessions/week/{week_id}:
 *   get:
 *     tags:
 *       - Sessions
 *     summary: Retrieve sessions for a given Week ID
 *     description: Retrieve all sessions associated with a given week ID.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Unique identifier of the week to retrieve sessions for.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of session details for the given week ID.
 *       404:
 *         description: No sessions found for the given week ID.
 */
router.get("/week/:week_id", sessionController.findSessionsByWeekId);

/**
 * @swagger
 * /api/v1/sessions/{session_id}:
 *   delete:
 *     tags:
 *       - Sessions
 *     summary: Delete the session with given ID
 *     description: Delete a specific session using its unique identifier.
 *     parameters:
 *       - in: path
 *         name: session_id
 *         required: true
 *         description: Unique identifier of the session to be deleted.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Session successfully deleted.
 *       404:
 *         description: Session not found or could not be deleted.
 */
router.delete("/:session_id", sessionController.deleteSessionById);

export default router;
