const express = require("express")
const router = express().Router()
const phoneController = require("../controller/phone.controller");

router.get('/', phoneController.getAll)
router.post('/add', phoneController.create)

module.exports = router;