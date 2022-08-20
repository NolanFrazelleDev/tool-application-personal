const express = require('express')
const router = express.Router()
const pomoController = require('../controllers/pomoTimer')

router.get('/', pomoController.getPomo) 

module.exports = router