module.exports = (Post) => {
    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt, owner) {
            const newPost = new Post({ imageUrl, brand, model, productionYear, description, createdAt, owner })
            await newPost.save()

            return newPost
        },
        getAll: async function () {
            return Post.find().select('_id imageUrl brand model productionYear description owner')
        },
        getOne: async function (_id) {
            return Post.findById(_id).populate('owner')
        }
    }
}