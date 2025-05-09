const express = require("express");
const router = express.Router();
const Controller = require("../controller/image.controller.js");

// router.put("/add", Controller.imageItem)
router.get("/", Controller.getAllImages);
router.post("/",  Controller.imageItem);

module.exports = router