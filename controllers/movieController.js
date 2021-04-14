const models = require('../models')
const axios = require('axios')
const movieController = {}

movieController.search = async (req, res) => {
    console.log(req)
    try {
        let search = await axios.get(`https://www.omdbapi.com/?t=${req.params.movie}&apikey=${process.env.APIKEY}`)
        console.log(search.data)
        res.send(search.data)
    } catch (error) {
        console.log(error)
        res.json({error})        
    }
}

// movieController.findOne = async (req, res) => {
//     try {
//         let search = await axios.get(`https://www.omdbapi.com/?t=${req.params.titleId}&apikey=${"7d9d06d2"}`)
//         res.send(search.data)
//     } catch (error) {
//         res.json({error})
//     }
// }

movieController.favorite = async (req, res) => {
    try {
        const [savedFilm, created] = await models.movie.findOrCreate({
            where: {
                filmId: req.params.filmId
            },
            defaults: {
                filmId: req.params.filmId
            }
        })

        let user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })

        await user.addFavorite(savedFilm)
        let results = await user.getFavorite()
        res.json({savedFilm, user, results})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = movieController