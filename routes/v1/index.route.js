import express from "express";
import exerciseRoutes from "./exercises.route.js";
import routineRoutes from "./routines.route.js";
import sessionRoutes from "./sessions.route.js";
import userRoutes from "./users.route.js";
import weekRoutes from "./weeks.route.js";

const router = express.Router();

router.use("/sessions", sessionRoutes);
router.use("/weeks", weekRoutes);
router.use("/exercises", exerciseRoutes);
router.use("/routines", routineRoutes);
router.use("/users", userRoutes);

export default router;
