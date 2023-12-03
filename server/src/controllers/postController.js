module.exports = (router, postManager, authMiddlewear) => {
    router.get("/", async (req, res) => {
        const posts = await postManager.getAll()

        try {
            res.status(200).send(posts)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.post("/create", authMiddlewear, async (req, res) => {
        const { imageUrl, brand, model, productionYear, description, createdAt } = req.body

        try {
            const owner = req.user
            const post = await postManager.create(imageUrl, brand, model, productionYear, description, createdAt, owner)

            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.get("/most/:prop", async (req, res) => {
        const prop = req.params.prop

        try {
            const post = await postManager.getMost(prop)
            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err)
        }
    })

    router.put("/:_id", authMiddlewear, async (req, res) => {
        const _id = req.params._id
        const data = req.body

        try {
            const userId = req.user
            const post = await postManager.edit(userId, _id, data)
            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.delete("/:_id", authMiddlewear, async (req, res) => {
        const _id = req.params._id

        try {
            const userId = req.user
            const post = await postManager.delete(userId, _id)
            res.status(200).send(post)
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