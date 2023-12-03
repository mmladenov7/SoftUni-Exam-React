module.exports = (router, commentManager, postManager, authMiddlewear) => {
    router.post('/:postId', authMiddlewear, async (req, res) => {
        const post = req.params.postId
        const { text } = req.body

        try {
            const user = req.user
            const comment = await commentManager.comment(post, user, text)
            postManager.comment(post, comment._id, "1")

            res.status(200).send(comment)
        } catch (err) {
            res.status(401).send(err.message)
        }
    })

    router.get('/:postId', async (req, res) => {
        const post = req.params.postId

        try {
            const comments = await commentManager.getCommentsForPost(post)

            res.status(200).send(comments)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.put('/:_id', authMiddlewear, async (req, res) => {
        const _id = req.params._id
        const { text } = req.body

        try {
            const user = req.user
            const comment = await commentManager.edit(_id, user, text)

            res.status(200).send(comment)
        } catch (err) {
            res.status(401).send(err.message)
        }
    })

    router.delete('/:_id', authMiddlewear, async (req, res) => {
        const _id = req.params._id

        try {
            const user = req.user
            const comment = await commentManager.delete(_id, user)
            postManager.comment(comment.post, comment._id, "-1")

            res.status(200).send({})
        } catch (err) {
            res.status(401).send(err.message)
        }
    })
    return router

}