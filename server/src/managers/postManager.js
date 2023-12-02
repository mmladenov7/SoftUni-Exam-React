module.exports = (Post) => {
    async function compareOwners(userId, postId) {
        const owner = await Post.findById(postId).select('owner').lean()
        const ownerId = owner.owner
        return userId == ownerId
    }

    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt, owner) {
            const newPost = new Post({ imageUrl, brand, model, productionYear, description, createdAt, updatedAt: createdAt, owner })
            await newPost.save()

            return newPost
        },
        getAll: async function () {
            return Post.find().select('_id imageUrl brand model productionYear description owner')
        },
        getOne: async function (_id) {
            return Post.findById(_id).populate('owner', '_id username imageUrl')
        },
        getByOwnerId: async function (ownerId) {
            return Post.find({ owner: ownerId }).select('_id imageUrl')
        },
        edit: async function (userId, _id, data) {
            const isOwner = await compareOwners(userId, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            const updatedPost = Post.findByIdAndUpdate(_id, data)
            return updatedPost
        },
        delete: async function (userId, _id) {
            const isOwner = compareOwners(userId, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            await Post.findByIdAndDelete(_id)
            return {}
        }
    }
}