module.exports = (router, userManager, jwt, SECRET) => {
    router.post("/login", async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await userManager.login(email, password)
            const payload = {
                _id: user._id,
                email: user.email
            }

            const token = await jwt.sign(payload, SECRET)
            const response = JSON.stringify({ token, email, _id: user._id })

            res.status(200).send(response)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.post("/register", async (req, res) => {
        const { username, email, password, repeatPassword } = req.body

        try {
            const user = await userManager.register(username, email, password, repeatPassword)
            const payload = {
                _id: user._id,
                email: user.email
            }

            const token = await jwt.sign(payload, SECRET)
            const response = JSON.stringify({ token, email, _id: user._id })

            res.status(200).send(response)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.get("/logout", (req, res) => {
        //TODO
        console.log("TODO")
    })

    router.get("/:_id", async (req, res) => {
        const _id = req.params._id

        try {
            const user = await userManager.getOne(_id)
            const response = JSON.stringify(user)

            res.status(200).send(response)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.put('/:_id', async (req, res) => {
        const _id = req.params._id
        const imageUrl = req.body

        await userManager.changeImageUrl(_id, imageUrl)

        res.status(200).send('ok')
    })

    return router
}