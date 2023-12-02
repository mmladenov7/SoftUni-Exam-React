module.exports = (router, commentManager, authMiddlewear) => {
    router.post('/:postId', authMiddlewear, async (req, res) => {
        const post = req.params.postId
        const { text } = req.body
        const user = req.user

        try {
            const comment = await commentManager.comment(post, user, text)

            res.status(200).send(comment)
        } catch (err) {
            res.status(404).send(err.message)
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

    return router

}