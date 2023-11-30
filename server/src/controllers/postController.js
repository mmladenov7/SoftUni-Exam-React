module.exports = (router, postManager, jwt, SECRET) => {
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

        try{
            const post = await postManager.getOne(_id)
            res.status(200).send(post)
        } catch(err){
            res.status(404).send(err.message)
        }
    })

    router.post("/create", async (req, res) => {
        const { imageUrl, brand, model, productionYear, description, createdAt } = req.body

        const token = req.header('Authorization')
        const ownerToken = await jwt.verify(token, SECRET)
        const owner = ownerToken._id

        try {
            const post = await postManager.create(imageUrl, brand, model, productionYear, description, createdAt, owner)

            res.status(200).send(post)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    return router
}