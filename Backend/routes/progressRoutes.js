const express = require ("express");
const router = express.Router();
const auth = require("../middleware/auth-middleware");
const {completeTask}=require("../controllers/progressController");

router.post("/task/complete", auth,completeTask);

module.exports= router;
