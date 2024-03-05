import { Router } from "express";
import { sessionRoutes } from "./sessions.route.js";

const router = Router();
router.use("/sessions", sessionRoutes);

export default router;
