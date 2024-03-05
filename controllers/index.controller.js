const router = require("express").Router();

const sessionsController = require("./sessions.controller");
router.use("/sessions", sessionsController);

module.exports = router;
