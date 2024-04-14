import { Router } from "express";
import { routineTypesController } from "../../controllers/routineTypes.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/routineTypes:
 *   get:
 *     tags:
 *       - RoutineTypes
 *     summary: Returns all RoutineTypes
 *     description: Returns all RoutineTypes.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested RoutineTypes.
 *       404:
 *         description: Resource not found.
 */
router.get("/", routineTypesController.findAll);
/**
 * @swagger
 * /api/v1/routineTypes/{routinetype_id}:
 *   get:
 *     tags:
 *       - RoutineTypes
 *     summary: Returns RoutineType for given ID
 *     description: Retrieve a RoutineType for given ID.
 *     parameters:
 *       - in: path
 *         name: routinetype_id
 *         required: true
 *         description: Unique identifier of the RoutineType.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested RoutineType or null if it doesn't exist.
 *       404:
 *         description: Resource not found.
 */
router.get("/:routinetype_id", routineTypesController.findById);

/**
 * @swagger
 * /api/v1/routineTypes/{routinetype_id}:
 *   delete:
 *     tags:
 *       - RoutineTypes
 *     summary: Delete a RoutineType by ID
 *     description: Deletes a specific RoutineType using its unique identifier.
 *     parameters:
 *       - in: path
 *         name: routinetype_id
 *         required: true
 *         description: Unique identifier of the RoutineType to be deleted.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: RoutineType successfully deleted.
 *       404:
 *         description: Resource not found or could not be deleted.
 */
router.delete("/:routinetype_id", routineTypesController.deleteById);

/**
 * @swagger
 * /api/v1/routineTypes/create:
 *   post:
 *     tags:
 *       - RoutineTypes
 *     summary: Create a new RoutineType
 *     description: Creates a new RoutineType with the given details.
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
 *               icon_url:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New RoutineType successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.post("/create", routineTypesController.create);

/**
 * @swagger
 * /api/v1/routineTypes/update:
 *   put:
 *     tags:
 *       - RoutineTypes
 *     summary: Updates an existing RoutineType
 *     description: Updates a RoutineType with the given details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routinetype_id:
 *                 type: number
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               icon_url:
 *                 type: string
 *             required:
 *               - routinetype_id
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New RoutineType successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.put("/update", routineTypesController.update);

export default router;
