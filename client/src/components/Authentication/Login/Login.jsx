import styles from './../auth.module.scss'
import apiFetch from '../../../api'
import { useForm } from '../../../hooks/useForm'
import { useContext } from 'react'
import AuthContext from '../../../contexts/AuthContext'

const startUser = { email: "", password: "" }
const path = 'users/login'

export default function Login() {
    const { data, changeHandler } = useForm(startUser)
    const { authenticateUser } = useContext(AuthContext)

    return (
        <section>
            <div className={styles.authContainer}>
                <div className={styles.login}>
                    <img src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <form onSubmit={(e) => authenticateUser(e, data, path)} >
                        <h2>Login</h2>
                        <input type="text" name="email" id="email" placeholder="Email" value={data.email} onChange={changeHandler} />
                        <input type="password" name="password" id="password" placeholder="Password" value={data.password} onChange={changeHandler} />
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