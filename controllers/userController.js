const models = require('../models')

const userController = {}

// Logging in
userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

        if (user.password === req.body.password) {
            res.json({message: 'login successful', user: user})
        } else {
            res.status(401)
            res.json({error: 'login failed'})
        }

    } catch (error) {
        res.status(400)
        res.json({error: 'login failed'})
    }
}

// Making a user
userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password:req.body.password
        })
        res.json({message: 'ok', user})
    } catch (error) {
        res.status(400)
        res.json({error: 'email already in use'})
    }
}

module.exports = userController