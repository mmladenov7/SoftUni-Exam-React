module.exports = (User, bcrypt) => {
    return {
        register: async function (username, email, password, repeatPassword) {
            if (password != repeatPassword ||
                username.length < 3 ||
                email.length < 10 ||
                password.length < 4) {

                throw new Error("Invalid data")
            }

            password = await bcrypt.hash(password, 10)

            const newUser = new User({ username, email, password })
            await newUser.save()

            return newUser
        },
        login: async function async(email, password) {
            const user = await User.findOne({ email: email }).lean()

            const passMatch = await bcrypt.compare(password, user.password)

            if (!user || !passMatch) {
                throw new Error('Invalid email or password')
            }

            return user
        }
    }
}