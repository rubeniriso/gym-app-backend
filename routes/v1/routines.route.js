import { Router } from "express";
import { routineController } from "../../controllers/routines.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/routines/{routine_id}:
 *   get:
 *     tags:
 *       - Routines
 *     summary: Get a Routine by ID
 *     description: Retrieve details of a specific routine using its ID.
 *     parameters:
 *       - in: path
 *         name: routine_id
 *         required: true
 *         description: Unique identifier of the routine.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the routine.
 *       404:
 *         description: Routine not found.
 */
router.get("/:routine_id", routineController.findById);

/**
 * @swagger
 * /api/v1/routines/user/{user_id}:
 *   get:
 *     tags:
 *       - Routines
 *     summary: Get Routines for a User
 *     description: Retrieve all routines associated with a specific user ID.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Unique identifier of the user to retrieve routines for.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of routines for the specified user.
 *       404:
 *         description: No routines found for the user.
 */
router.get("/user/:user_id", routineController.findAllByUser);

/**
 * @swagger
 * /api/v1/routines/user:
 *   post:
 *     tags:
 *       - Routines
 *     summary: Creates a Routine for a User
 *     description: Creates a Routine for a User associated with a specific user ID.
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
 *               userId:
 *                 type: integer
 *             required:
 *               - name
 *               - userId
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of routines for the specified user.
 *       400:
 *         description: Some values are wrong.
 */
router.post("/user", routineController.create)

export default router;