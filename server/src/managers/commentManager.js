module.exports = (Comment) => {
    async function compareOwners(userId, commentId) {
        const owner = await Comment.findById(commentId).select('owner').lean()
        const ownerId = owner?.owner
        return userId == ownerId
    }

    return {
        comment: async (post, user, text) => {
            const comment = new Comment({ post, user, text })
            await comment.save()

            return comment.populate('user', '_id username imageUrl')
        },
        getCommentsForPost: async (post) => {
            const comments = Comment.find({ post }).populate('user', '_id username imageUrl')
            return comments
        },
        edit: async (_id, user, text) => {
            const isOwner = compareOwners(user, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            const updatedComment = await Comment.findByIdAndUpdate(_id, { text }, { new: true })
            return updatedComment
        },
        delete: async (_id, user) => {
            const isOwner = compareOwners(user, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            return await Comment.findByIdAndDelete(_id)
        }
    }
}