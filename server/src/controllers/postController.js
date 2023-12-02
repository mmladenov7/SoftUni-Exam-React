module.exports = (router, postManager, authMiddlewear) => {
    router.get("/", async (req, res) => {
        const posts = await postManager.getAll()

        try {
            res.status(200).send(posts)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.get('/:_id', async (req, res) => {
        const _id = req.params._id

        try {
            const post = await postManager.getOne(_id)
            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.post("/create", authMiddlewear, async (req, res) => {
        const { imageUrl, brand, model, productionYear, description, createdAt } = req.body
        const owner = req.user

        try {
            const post = await postManager.create(imageUrl, brand, model, productionYear, description, createdAt, owner)

            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.post("/:_id/edit", async (req, res) => {
        const _id = req.params._id
        const data = req.body

        console.log(_id, data)
        res.status(200).send('OK')
    })

    router.get("/user/:ownerId", async (req, res) => {
        const ownerId = req.params.ownerId

        try {
            const post = await postManager.getByOwnerId(ownerId)
            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    return router
}