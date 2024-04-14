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
 * /api/v1/routines/create/{user_id}:
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
 *               user_id:
 *                 type: string
 *               routinetype_id:
 *                 type: string
 *             required:
 *               - name
 *               - user_id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of routines for the specified user.
 *       400:
 *         description: Some values are wrong.
 */
router.post("/create/:user_id", routineController.create);
/**
 * @swagger
 * /api/v1/routines/update:
 *   put:
 *     tags:
 *       - Routines
 *     summary: Updates a Routine
 *     description: Updates a Routine with a specific routine ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routine_id:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               routinetype_id:
 *                 type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of routines for the specified user.
 *       400:
 *         description: Some values are wrong.
 */
router.put("/update/:routine_id", routineController.update);
/**
 * @swagger
 * /api/v1/routines/{routine_id}:
 *   delete:
 *     tags:
 *       - Routines
 *     summary: Deletes a Routine
 *     description: Updates a Routine with a specific routine ID.
 *     parameters:
 *       - in: path
 *         name: routine_id
 *         required: true
 *         description: Unique identifier of the routine to delete.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: True if it got deleted, false if it didn't.
 *       400:
 *         description: Some values are wrong.
 */
router.delete("/:routine_id", routineController.deleteById);

export default router;
