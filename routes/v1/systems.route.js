import { Router } from "express";
import { systemsController } from "../../controllers/systems.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/systems:
 *   get:
 *     tags:
 *       - Systems
 *     summary: Returns all Systems
 *     description: Returns all Systems.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested Systems.
 *       404:
 *         description: Resource not found.
 */
router.get("/", systemsController.findAll);
/**
 * @swagger
 * /api/v1/systems/{system_id}:
 *   get:
 *     tags:
 *       - Systems
 *     summary: Returns System for given ID
 *     description: Retrieve a System for given ID.
 *     parameters:
 *       - in: path
 *         name: system_id
 *         required: true
 *         description: Unique identifier of the System.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The requested System or null if it doesn't exist.
 *       404:
 *         description: Resource not found.
 */
router.get("/:system_id", systemsController.findById);

/**
 * @swagger
 * /api/v1/systems/{system_id}:
 *   delete:
 *     tags:
 *       - Systems
 *     summary: Delete a System by ID
 *     description: Deletes a specific System using its unique identifier.
 *     parameters:
 *       - in: path
 *         name: system_id
 *         required: true
 *         description: Unique identifier of the System to be deleted.
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: System successfully deleted.
 *       404:
 *         description: Resource not found or could not be deleted.
 */
router.delete("/:system_id", systemsController.deleteById);

/**
 * @swagger
 * /api/v1/systems/create:
 *   post:
 *     tags:
 *       - Systems
 *     summary: Create a new System
 *     description: Creates a new System with the given details.
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
 *               - routine_id
 *               - name
 *               - description
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New System successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.post("/create", systemsController.create);

/**
 * @swagger
 * /api/v1/systems/update:
 *   put:
 *     tags:
 *       - Systems
 *     summary: Updates an existing System
 *     description: Updates a System with the given details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               system_id:
 *                 type: number
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               icon_url:
 *                 type: string
 *             required:
 *               - system_id
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: New System successfully created.
 *       400:
 *         description: Bad request due to invalid input parameters.
 */
router.put("/update", systemsController.update);

export default router;
