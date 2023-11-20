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
        }
    })

    const Post = mongoose.model("Post", schema)
    return Post
}