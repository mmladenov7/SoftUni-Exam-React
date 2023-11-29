module.exports = (mongoose) => {
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
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        likes:[{
            type: mongoose.Types.ObjectId,
            ref: "User"
        }],
        comments:[{
            type: mongoose.Types.ObjectId,
            ref: "User"
        }]
    })

    const Post = mongoose.model("Post", schema)
    return Post
}