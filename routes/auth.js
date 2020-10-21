const express = require("express");
const router  = express.Router();
const recurringController = require("../controller/recurring-controller");
router.get("/recurring",recurringController.register);
//router.post("/recurring", function(req, res){recurringController.register});
module.exports =router;