import express from "express";
import exerciseRoutes from "./exercises.route.js";
import routineRoutes from "./routines.route.js";
import trainingDayExercisesRoutes from "./trainingDayExercises.route.js";
import trainingDaysRoutes from "./trainingDays.route.js";
import userRoutes from "./users.route.js";
import userSettingsRoutes from "./userSettings.route.js";
import weekRoutes from "./weeks.route.js";
import authRoutes from "./auth.route.js";
import routineTypesRoutes from "./routineTypes.route.js";

const router = express.Router();

router.use("/trainingDays", trainingDaysRoutes);
router.use("/weeks", weekRoutes);
router.use("/exercises", exerciseRoutes);
router.use("/routines", routineRoutes);
router.use("/users", userRoutes);
router.use("/usersettings", userSettingsRoutes);
router.use("/trainingdayexercises", trainingDayExercisesRoutes);
router.use("/routinetypes", routineTypesRoutes);
router.use("/auth", authRoutes);
export default router;
