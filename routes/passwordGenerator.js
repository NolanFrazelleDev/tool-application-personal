const express = require('express')
const router = express.Router()
const passwordGenerator = require('../controllers/passwordGenerator')

router.get('/', passwordGenerator.getGene) 

module.exports = router