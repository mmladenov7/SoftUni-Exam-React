module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        post: {
            type: mongoose.Types.ObjectId,
            ref: "Post"
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        text: {
            type: String,
            required: true
        }
    })

    const Comment = mongoose.model("Comment", schema)
    return Comment
}