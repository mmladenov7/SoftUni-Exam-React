module.exports = (User, bcrypt) => {
    return {
        register: async function (username, email, password, repeatPassword) {
            if (password != repeatPassword ||
                username.length < 4 ||
                email.length < 8 ||
                password.length < 5) {

                throw new Error("Invalid data")
            }

            password = await bcrypt.hash(password, 10)
            const imageUrl = 'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg'

            try {
                const newUser = new User({ username, email, password, imageUrl })
                await newUser.save()

                return newUser
            } catch (err) {
                if (err.message.includes('email')) {
                    throw new Error('Email already taken')
                }
            }
        },
        login: async function (email, password) {
            const user = await User.findOne({ email: email }).lean()

            const passMatch = await bcrypt.compare(password, user.password)

            if (!user || !passMatch) {
                throw new Error('Invalid email or password')
            }

            return user
        },
        getOne: async function (_id) {
            return User.findById(_id).select('username email imageUrl')
        },
        changeImageUrl: async function (_id, imageUrl) {
            return User.findByIdAndUpdate(_id, imageUrl)
        }
    }
}