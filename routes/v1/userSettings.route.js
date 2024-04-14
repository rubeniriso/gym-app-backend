import { Router } from "express";
import { userSettingsController } from "../../controllers/userSettings.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/usersettings/{user_id}/create:
 *   post:
 *     tags:
 *       - UserSettings
 *     summary: Creates user settings
 *     description: Creates user settings when signin up.
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
 *         description: OK.
 *       404:
 *         description: User not found.
 */
router.post("/:user_id/create", userSettingsController.createUserSettings);
/**
 * @swagger
 * /api/v1/usersettings/{user_id}/get-active-routine:
 *   get:
 *     tags:
 *       - UserSettings
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
router.get(
  "/:user_id/get-active-routine",
  userSettingsController.getActiveRoutine
);

/**
 * @swagger
 * /api/v1/usersettings/make-routine-active:
 *   put:
 *     tags:
 *       - UserSettings
 *     summary: Make a routine active
 *     description: Makes a users routine active.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               routineId:
 *                 type: string
 *             required:
 *               - userId
 *               - routineId
 *     responses:
 *       200:
 *         description: Routine made active.
 */
router.put("/make-routine-active", userSettingsController.makeRoutineActive);

export default router;
