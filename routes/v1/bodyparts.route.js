import { Router } from "express";
import { bodypartsController } from "../../controllers/bodyparts.controller.js";
const router = Router();

/**
 * @swagger
 * /api/v1/bodyparts:
 *   get:
 *     tags:
 *       - Bodyparts
 *     summary: Get Body parts
 *     description: Retrieve all body parts.
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of routines for the specified user.
 *       404:
 *         description: No routines found for the user.
 */
router.get("/", bodypartsController.findAll);

export default router;
