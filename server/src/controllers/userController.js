module.exports = (router, userManager, jwt, SECRET) => {
    router.post("/login", async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await userManager.login(email, password)
            res.status(200).send(user)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.post("/register", async (req, res) => {
        const { username, email, password, repeatPassword } = req.body

        try {
            const user = await userManager.register(username, email, password, repeatPassword)
            res.status(200).send(user)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })

    router.get("/logout", (req, res) => {
        //TODO
        console.log("TODO")
    })

    return router
}