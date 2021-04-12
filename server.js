const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(require('cors')())

// const models = require('./models')


// const login = async (req, res) => {
//     try {
//         const user = await models.user.findOne({
//             where: {
//                 email: req.body.email
//             }
//         })

//         if (user.password === req.body.password) {
//             res.json({message: 'login successful', user: user})
//         } else {
//             res.status(401)
//             res.json({error: 'login failed'})
//         }

//     } catch (error) {
//         res.status(400)
//         res.json({error: 'login failed'})
//     }
// }

// app.post('/users/login', login)



// const createUser = async (req, res) => {
//     try {
//         const user = await models.user.create({
//             name: req.body.name,
//             email: req.body.email,
//             password:req.body.password
//         })
//         res.json({message: 'ok', user})
//     } catch (error) {
//         res.status(400)
//         res.json({error: 'email already in use'})
//     }
// }

// app.post('/users', createUser)



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

app.use('/user', userRoutes)
// app.use('/movie', movieRoutes)
