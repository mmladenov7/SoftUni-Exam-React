module.exports = (mongoose, Like, Comment) => {
    const schema = new mongoose.Schema({
        imageUrl: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        productionYear: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        createdAt: {
            type: String,
            required: true
        },
        updatedAt: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        likes: [{
            type: mongoose.Types.ObjectId,
            ref: "Like"
        }],
        comments: [{
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }]

    })

    schema.pre('findOneAndDelete', async function () {
        const currentPost = this.getQuery()._id
        await Like.deleteMany({ post: currentPost })
        await Comment.deleteMany({ post: currentPost })

    })

    const Post = mongoose.model("Post", schema)
    return Post
}