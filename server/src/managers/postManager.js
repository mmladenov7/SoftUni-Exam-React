module.exports = (Post) => {
    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt) {
            const newPost = new Post({ imageUrl, brand, model, productionYear, description, createdAt, likes, comments })
            await newPost.save()

            return newPost
        }
    }
}