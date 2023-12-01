module.exports = (router, likeManager, jwt, SECRET) => {
    router.post('/:postId', async (req, res) => {
        const post = req.params.postId

        const token = req.header('Authorization')
        const ownerToken = await jwt.verify(token, SECRET)
        const user = ownerToken._id

        try {
            const like = await likeManager.like(post, user)

            res.status(200).send(like)
        } catch (err) {
            console.log(err)
            console.log(err.message)
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