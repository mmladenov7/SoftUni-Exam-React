module.exports = (app, express, mongoose, bcrypt, jwt, SECRET) => {
    const User = require('../models/user')(mongoose)
    const Post = require('../models/post')(mongoose)
    const Like = require('../models/like')(mongoose)
    const Comment = require('../models/comment')(mongoose)

    const userManager = require('../managers/userManager')(User, bcrypt)
    const postManager = require('../managers/postManager')(Post)
    const likeManager = require('../managers/likeManager')(Like)
    const commentManager = require('../managers/commentManager')(Comment)

    const userController = require('../controllers/userController')(express.Router(), userManager, jwt, SECRET)
    const postController = require('../controllers/postController')(express.Router(), postManager, jwt, SECRET)
    const likeController = require('../controllers/likeController')(express.Router(), likeManager, jwt, SECRET)
    const commentController = require('../controllers/commentController')(express.Router(), commentManager, jwt, SECRET)

    app.use("/users", userController)
    app.use("/posts", postController)
    app.use("/likes", likeController)
    app.use("/comments", commentController)
}