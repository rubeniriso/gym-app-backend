import { Router } from "express";
import { authController } from "../../controllers/auth.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a New User
 *     description: Registers a new user with the provided username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               repeatPassword:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *               - repeatPassword
 *     responses:
 *       200:
 *         description: User successfully created.
 *       400:
 *         description: Missing parameter or email already in use.
 */
router.post("/register", authController.register);

export default router;
