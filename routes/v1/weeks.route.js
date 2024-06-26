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
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested week.
 *       404:
 *         description: Week not found.
 */
router.get("/:week_id", weekController.findById);

/**
 * @swagger
 * /api/v1/weeks/routine/{routine_id}:
 *   get:
 *     tags:
 *       - Weeks
 *     summary: Returns weeks for given routine ID
 *     description: Retrieve a week for given ID.
 *     parameters:
 *       - in: path
 *         name: routine_id
 *         required: true
 *         description: Unique identifier of the week.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested week.
 *       404:
 *         description: Week not found.
 */
router.get("/routine/:routine_id", weekController.findAllByRoutineId);

/**
 * @swagger
 * /api/v1/weeks/{week_id}:
 *   delete:
 *     tags:
 *       - Weeks
 *     summary: Delete a week by ID
 *     description: Deletes a specific week using its unique identifier.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Unique identifier of the week to be deleted.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Week successfully deleted.
 *       404:
 *         description: Week not found or could not be deleted.
 */
router.delete("/:week_id", weekController.deleteById);

/**
 * @swagger
 * /api/v1/weeks/create/{routine_id}:
 *   post:
 *     tags:
 *       - Weeks
 *     summary: Create a new Week
 *     description: Creates a new week with the given details.
 *     parameters:
 *       - in: path
 *         name: routine_id
 *         required: true
 *         description: Identifier of the routine.
 *         schema:
 *           type: string
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
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New week successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.post("/create/:routine_id", weekController.create);


/**
 * @swagger
 * /api/v1/weeks/update/{week_id}:
 *   put:
 *     tags:
 *       - Weeks
 *     summary: Updates a Week
 *     description: Updates a Week with a specific week ID.
 *     parameters:
 *       - in: path
 *         name: week_id
 *         required: true
 *         description: Identifier of the week to be updated.
 *         schema:
 *           type: string
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
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The week was succesfully updated.
 *       400:
 *         description: Some values are wrong.
 */
router.put("/update/:week_id", weekController.update);

export default router;
