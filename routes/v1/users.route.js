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
 *           type: integer
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
 * /api/v1/users/create:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a New User
 *     description: Create a new user with the provided name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User successfully created.
 *       400:
 *         description: Missing parameter or email already in use.
 */
router.post("/create", userController.create);

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
