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
router.get("/session/:session_id", sessionController.findSession);

export default router;
