import { Router } from "express";
import { exerciseController } from "../../controllers/exercises.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/exercises/:
 *   get:
 *     tags:
 *       - Exercises
 *     summary: Gets all exercises
 *     description: Retrieve details of a all exercises
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the exercises.
 *       404:
 *         description: Exercise not found.
 */
router.get("/", exerciseController.findAll);
/**
 * @swagger
 * /api/v1/exercises/{exercise_id}:
 *   get:
 *     tags:
 *       - Exercises
 *     summary: Get an Exercise by ID
 *     description: Retrieve details of a specific exercise using its ID.
 *     parameters:
 *       - in: path
 *         name: exercise_id
 *         required: true
 *         description: Unique identifier of the exercise.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Detailed information about the exercise.
 *       404:
 *         description: Exercise not found.
 */
router.get("/:exercise_id", exerciseController.findExerciseById);

/**
 * @swagger
 * /api/v1/exercises/name/{name}:
 *   get:
 *     tags:
 *       - Exercises
 *     summary: Get Exercises by Name
 *     description: Retrieve a list of exercises that match a given name.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Name of the exercise to search for.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of exercises that match the name.
 *       404:
 *         description: No exercises found with that name.
 */
router.get("/name/:name", exerciseController.findExerciseByName);

/**
 * @swagger
 * /api/v1/exercises/body-part/{body_part}:
 *   get:
 *     tags:
 *       - Exercises
 *     summary: Get Exercises by Body Part
 *     description: Retrieve a list of exercises associated with a specific body part.
 *     parameters:
 *       - in: path
 *         name: body_part
 *         required: true
 *         description: The body part to search exercises for.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of exercises related to the specified body part.
 *       404:
 *         description: No exercises found for the specified body part.
 */
router.get("/body-part/:body_part", exerciseController.findExerciseByBodyPart);

/**
 * @swagger
 * /api/v1/exercises/equipment/{equipment}:
 *   get:
 *     tags:
 *       - Exercises
 *     summary: Get Exercises by Equipment
 *     description: Retrieve a list of exercises that require specific equipment.
 *     parameters:
 *       - in: path
 *         name: equipment
 *         required: true
 *         description: The equipment to search exercises for.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of exercises that require the specified equipment.
 *       404:
 *         description: No exercises found for the specified equipment.
 */
router.get("/equipment/:equipment", exerciseController.findExerciseByEquipment);

export default router;
