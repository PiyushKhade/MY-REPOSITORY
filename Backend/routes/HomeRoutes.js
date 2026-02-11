const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth-middleware");
const {getHome}= require("../controllers/homeController");

router.get("/", auth,getHome);

module.exports = router;