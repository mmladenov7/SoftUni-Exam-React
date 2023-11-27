module.exports = (router, mongoose, jwt, SECRET) => {
    const Post = require('../models/post')(mongoose)
    const postManager = require('../managers/postManager')(Post, jwt, SECRET)
    const postController = require('../controllers/postController')

    return postController(router, postManager)
}