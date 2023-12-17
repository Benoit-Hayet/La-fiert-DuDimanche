const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers")

router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getUsersById);

router.post("/users", userControllers.postUsers);
router.delete("/users/:id", userControllers.deleteUsers);


module.exports = router;