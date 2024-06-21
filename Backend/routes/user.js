const express = require('express')
const router = express.Router()
const {loginUser, SignUpUser} = require('../controllers/userController')

router.post('/login',loginUser)

router.post('/signup',SignUpUser)


module.exports = router
