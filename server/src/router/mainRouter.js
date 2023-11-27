module.exports = (app, express, mongoose, bcrypt, jwt, SECRET) => {
    const User = require('../models/user')(mongoose)
    const Post = require('../models/post')(mongoose)

    const userManager = require('../managers/userManager')(User, bcrypt)
    const postManager = require('../managers/postManager')(Post, jwt, SECRET)

    const userController = require('../controllers/userController')(express.Router(), userManager, jwt, SECRET)
    const postController = require('../controllers/postController')(express.Router(), postManager, userManager, jwt, SECRET)

    app.use("/users", userController)
    app.use("/posts", postController)
}