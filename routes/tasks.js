const express = require("express");
const router = express.Router();

// methods to get from controllers
const { getAllTasks } = require("../controllers/tasks");
// to do the get, post, delete methods
router.route("/").get(getAllTasks);

module.exports = router;
