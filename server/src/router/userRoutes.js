module.exports = (router, mongoose, bcrypt, jwt, SECRET) => {
    const User = require('../models/user')(mongoose)
    const userManager = require('../managers/userManager')(User, bcrypt)
    const userController = require('../controllers/userController')

    return userController(router, userManager, jwt, SECRET)
}