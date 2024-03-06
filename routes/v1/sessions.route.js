import { Router } from "express";
import { sessionController } from "../../controllers/sessions.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/sessions/get-all:
 *   get:
 *     tags:
 *       - Sessions
 *     summary: Returns all sessions
 *     description: Retrieve a list of all sessions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of sessions
 */
router.get("/get-all", sessionController.getAll);

export default router;
