module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })

    const User = mongoose.model("User", schema)
    return User
}