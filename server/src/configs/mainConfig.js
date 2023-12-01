const uri = `mongodb://127.0.0.1:27017/carstagram`


module.exports = async (app, express, mongoose) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "*");
        // res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    })
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    await mongoose.connect(uri)
}