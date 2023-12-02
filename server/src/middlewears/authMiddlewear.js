module.exports = (jwt, SECRET) =>
    async function (req, res, next) {

        if (req.method == 'OPTIONS' || !req.header('Authorization')) {
            return next()
        }

        try {
            const token = req.header('Authorization')
            const ownerToken = await jwt.verify(token, SECRET)
            const owner = ownerToken._id

            req.user = owner
            return next()
        } catch (err) {
            res.status(404).send(err.message)
        }

    }