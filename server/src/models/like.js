module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        post: {
            type: mongoose.Types.ObjectId,
            ref: "Post"
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    })

    const Like = mongoose.model("Like", schema)
    return Like
}