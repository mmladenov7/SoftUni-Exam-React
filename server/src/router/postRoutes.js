module.exports = (router, mongoose) => {
    const Post = require('../models/post')(mongoose)
    const postManager = require('../managers/postManager')(Post)
    const postController = require('../controllers/postController')

    return postController(router, postManager)
}