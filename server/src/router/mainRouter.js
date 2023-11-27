const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes')

module.exports = (app, express, mongoose, bcrypt, jwt, SECRET) => {
    const User = require('../models/user')(mongoose)
    const Post = require('../models/post')(mongoose)

    const userManager = require('../managers/userManager')(User, bcrypt)
    const postManager = require('../managers/postManager')(Post, jwt, SECRET)

    app.use("/users", userRouter(express.Router(), userManager, jwt, SECRET))
    app.use("/posts", postRouter(express.Router(), postManager, userManager, jwt, SECRET))
}