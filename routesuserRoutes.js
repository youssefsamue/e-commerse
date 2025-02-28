const express = require("express");
const { getUser } = require("./modelsUser");

const router = express.Router();

router.get("/:id", getUser);

module.exports = router;
