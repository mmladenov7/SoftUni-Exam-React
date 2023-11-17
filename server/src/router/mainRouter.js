const userRouter = require('./userRoutes')

module.exports = (app, express, mongoose, bcrypt) => {
    app.use("/users", userRouter(express.Router(), mongoose, bcrypt))
}