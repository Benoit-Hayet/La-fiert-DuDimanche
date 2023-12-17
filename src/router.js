const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers")

router.get("/users", userControllers.getUsers);


module.exports = router;