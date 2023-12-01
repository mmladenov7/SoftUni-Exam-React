module.exports = (Like) => {
    return {
        like: async (post, user) => {
            const isLiked = await Like.find({ post, user })

            if (isLiked.length > 0) {
                await Like.findOneAndDelete({ _id: isLiked[0]._id })
                return '-1'
            }

            const newLike = new Like({ post, user })
            await newLike.save()

            return '1'
        },
        getLikesForPost: async (post) => {
            const likes = await Like.find({ post })
            return `${likes.length}`
        }
    }
}