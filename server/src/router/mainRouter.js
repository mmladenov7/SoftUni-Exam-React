const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes')

//TODO

module.exports = (app, express, mongoose, bcrypt, jwt, SECRET) => {
    app.use("/users", userRouter(express.Router(), mongoose, bcrypt, jwt, SECRET))
    app.use("/posts", postRouter(express.Router(), mongoose))
}