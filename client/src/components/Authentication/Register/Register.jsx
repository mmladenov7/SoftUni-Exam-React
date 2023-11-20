import { useEffect, useState } from 'react'
import styles from './../auth.module.scss'
import apiFetch from '../../../api'

const startUser = { username: "", email: "", password: "", repeatPassword: "" }

export default function Register() {
    const [user, setUser] = useState(startUser)

    function changeHandler(e) {
        setUser(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault()

        const response = await apiFetch.post('users/register', user)
    }

    return (
        <section>
            <div>
                <h2>Register</h2>
                <div className={styles.register}>
                    <img src='https://w0.peakpx.com/wallpaper/310/1013/HD-wallpaper-mustang-car-cars.jpg' />
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Carstagram</h2>
                        <input type="text" name="username" id="username" placeholder="username" value={user.username} onChange={changeHandler} />
                        <input type="text" name="email" id="email" placeholder="email" value={user.email} onChange={changeHandler} />
                        <input type="password" name="password" id="password" placeholder="password" value={user.password} onChange={changeHandler} />
                        <input type="password" name="repeatPassword" id="repeatPassword" placeholder="repeat password" value={user.repeatPassword} onChange={changeHandler} />
                        <button type="submit">Register</button>
                        <p>
                            Already have an account? <a href="/users/login">Log in</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}