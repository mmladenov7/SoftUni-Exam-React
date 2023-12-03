module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String
        }
    })

    const User = mongoose.model("User", schema)
    return User
}