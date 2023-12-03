module.exports = (router, likeManager, postManager, authMiddlewear) => {
    router.post('/:postId', authMiddlewear, async (req, res) => {
        const post = req.params.postId
        const user = req.user

        try {
            const [response, like] = await likeManager.like(post, user)
            postManager.like(post, like._id, response)

            res.status(200).send(response)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.get('/:postId', async (req, res) => {
        const post = req.params.postId

        try {
            const likes = await likeManager.getLikesForPost(post)

            res.status(200).send(likes)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.get('/user/:_id', async (req, res) => {
        const user = req.params._id

        try {
            const likedPosts = await likeManager.getLikesByUser(user)

            res.status(200).send(likedPosts)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })



    return router
}