module.exports = (router, userManager, jwt, SECRET) => {
    const userController = require('../controllers/userController')

    return userController(router, userManager, jwt, SECRET)
}