const express = require("express");
const { processPayment } = require("./payment");

const router = express.Router();

router.post("/pay", processPayment);

module.exports = router;
