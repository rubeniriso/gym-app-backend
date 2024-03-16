import express from "express";
import exerciseRoutes from "./exercises.route.js";
import routineRoutes from "./routines.route.js";
import sessionExercisesRoutes from "./sessionExercises.route.js";
import sessionRoutes from "./sessions.route.js";
import userRoutes from "./users.route.js";
import weekRoutes from "./weeks.route.js";
import routineTypesRoutes from "./routineTypes.route.js";

const router = express.Router();

router.use("/sessions", sessionRoutes);
router.use("/weeks", weekRoutes);
router.use("/exercises", exerciseRoutes);
router.use("/routines", routineRoutes);
router.use("/users", userRoutes);
router.use("/sessionexercises", sessionExercisesRoutes);
router.use("/routinetypes", routineTypesRoutes);

export default router;
