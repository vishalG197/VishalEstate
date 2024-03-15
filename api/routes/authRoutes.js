const express = require('express');
const authcontroller = require("../controller/auth.controler")
const router =express.Router();

router.post("/",authcontroller.signup)



module.exports = router;