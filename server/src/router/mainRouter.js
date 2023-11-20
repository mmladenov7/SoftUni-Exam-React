const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes')

//TODO

module.exports = (app, express, mongoose, bcrypt) => {
    app.use("/users", userRouter(express.Router(), mongoose, bcrypt))
    app.use("/posts", postRouter(express.Router(), mongoose))
}