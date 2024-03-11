import { Router } from "express";
import { weekController } from "../../controllers/weeks.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/weeks/{week_id}:
 *   get:
 *     tags:
 *       - Weeks
 *     summary: Returns week for given ID
 *     description: Retrieve a week for given ID.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Unique identifier of the week.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested week.
 *       404:
 *         description: Week not found.
 */
router.get("/:week_id", weekController.findWeekById);

export default router;
