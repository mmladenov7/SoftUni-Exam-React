import { useEffect, useState } from 'react'
import styles from './../auth.module.scss'
import apiFetch from '../../../api'

const startUser = { email: "", password: "" }

export default function Login() {
    const [user, setUser] = useState(startUser)

    function changeHandler(e) {
        setUser(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault()

        const response = await apiFetch.post('users/login', user)
    }

    return (
        <section>
            <div>
                <h2>Login</h2>
                <div className={styles.login}>
                    <img src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <h2>Carstagram</h2>
                        <input type="text" name="email" id="email" placeholder="Email" value={user.email} onChange={changeHandler} />
                        <input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={changeHandler} />
                        <button type="submit">Login</button>
                        <p>
                            Not registered? <a href="/users/register">Create an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}