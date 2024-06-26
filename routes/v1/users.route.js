import { Router } from "express";
import { userController } from "../../controllers/user.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/users/{user_id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a User by ID
 *     description: Retrieve details of a specific user using their ID.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Unique identifier of the user.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the user.
 *       404:
 *         description: User not found.
 */
router.get("/:user_id", userController.findById);
/**
 * @swagger
 * /api/v1/users/{user_id}/get-active-routine:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a User's active routine
 *     description: Retrieve a User's active routine using their ID.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Unique identifier of the user.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User's active routine.
 *       404:
 *         description: User not found.
 */
router.get("/:user_id/get-active-routine", userController.getActiveRoutine);

/**
 * @swagger
 * /api/v1/users/make-routine-active:
 *   put:
 *     tags:
 *       - Users
 *     summary: Make a routine active
 *     description: Makes a user"s routine active.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               routineId:
 *                 type: number
 *             required:
 *               - userId
 *               - routineId
 *     responses:
 *       200:
 *         description: Routine made active.
 */
router.put("/make-routine-active", userController.makeRoutineActive);

export default router;
