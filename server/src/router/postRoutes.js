module.exports = (router, postManager, userManager, jwt, SECRET) => {
    const postController = require('../controllers/postController')

    return postController(router, postManager, userManager, jwt, SECRET)
}