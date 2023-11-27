module.exports = (Post, jwt, SECRET) => {
    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt, token) {
            const owner = await jwt.verify(token, SECRET)

            const newPost = new Post({ imageUrl, brand, model, productionYear, description, createdAt, owner: owner._id })
            await newPost.save()

            return newPost
        },
        getAll: async function () {
            return Post.find()
        }
    }
}