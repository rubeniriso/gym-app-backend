import { Router } from "express";
import { sessionController } from "../controllers/sessions.controller.js";

const router = Router();

router.get("/", sessionController.getAll);

router.get("/hola", (req, res, next) => {
  res.json("All good in here");
});

export default router;
