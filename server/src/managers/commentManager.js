module.exports = (Comment) => {
    return {
        comment: async (post, user, text) => {
            const comment = new Comment({ post, user, text })
            await comment.save()

            return comment.populate('user', '_id username imageUrl')
        },
        getCommentsForPost: async (post) => {
            const comments = Comment.find({ post }).populate('user', '_id username imageUrl')
            return comments
        }
    }
}