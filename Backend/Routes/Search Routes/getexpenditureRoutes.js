const express = require("express");
const router = express.Router();
const expenditureController = require("../../Controllers/Search Controllers/getexpenditureController");

router.get("/expenditure/:sector_name", expenditureController.getexpenditure);


module.exports = router;