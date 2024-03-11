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
router.get("/:routine_id", routineController.findRoutineById);

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
router.get("/user/:user_id", routineController.findRoutineByUser);

export default router;
