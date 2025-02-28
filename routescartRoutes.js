const express = require("express");
const { getCart } = require("./modelsCart");

const router = express.Router();

router.get("/:userId", getCart);

module.exports = router;
