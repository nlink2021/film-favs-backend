const userController = require('../controllers/userController')
const express = require('express')
const userRoutes = express.Router()

// userRoutes.get('/', userController.getAll)
userRoutes.post('/login', userController.login)
userRoutes.post('/', userController.createUser)

module.exports = userRoutes
