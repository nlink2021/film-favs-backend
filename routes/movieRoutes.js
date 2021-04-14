const movieController = require('../controllers/movieController')
const express = require('express')
const movieRoutes = express.Router()

movieRoutes.post('/search/:movie', movieController.search) 
// movieRoutes.get('/search/:movieId', movieController.findOne)
movieRoutes.post('/:userId/save/:movieId', movieController.favorite)


module.exports = movieRoutes

