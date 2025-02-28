const express = require("express");
const { getAllProducts } = require("./modelsProduct");

const router = express.Router();

router.get("/", getAllProducts);

module.exports = router;
