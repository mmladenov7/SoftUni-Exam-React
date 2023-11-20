module.exports = (Post) => {
    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt) {
            const newPost = new Post({ imageUrl, brand, model, productionYear, description, createdAt })
            await newPost.save()

            return newPost
        },
        getAll: async function () {
            return Post.find()
        }
    }
}