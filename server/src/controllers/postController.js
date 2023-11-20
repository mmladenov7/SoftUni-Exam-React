module.exports = (router, postManager) => {
    router.get("/", async (req, res) => {
        const posts = await postManager.getAll()

        try {
            res.status(200).send(posts)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.post("/create", async (req, res) => {
        const { imageUrl, brand, model, productionYear, description, createdAt } = req.body

        try {
            const post = await postManager.create(imageUrl, brand, model, productionYear, description, createdAt)
            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    return router
}