const express = require("express");
const router = express.Router();
const deleteExpense = require("../../Controllers/Deletion Controllers/deleteexpenseController");

router.post("/admin/deleteexpense/:Expense_id", deleteExpense.deleteExpense);


module.exports = router;