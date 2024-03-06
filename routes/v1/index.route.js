import express from "express";
import sessionRoutes from "./sessions.route.js";

const router = express.Router();

router.use("/sessions", sessionRoutes);

export default router;
