import { Router } from "express";
import { musclesController } from "../../controllers/muscles.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/muscles/{bodypart_id}:
 *   get:
 *     tags:
 *       - Muscles
 *     summary: Get all muscles by bodypart_id
 *     description: Retrieve all muscles using its referred bodypart_id.
 *     parameters:
 *       - in: path
 *         name: bodypart_id
 *         required: true
 *         description: Unique identifier of the body part.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the routine.
 *       400:
 *         description: Bad request.
 */
router.get("/:bodypart_id", musclesController.findAllByBodypartId);

export default router;
