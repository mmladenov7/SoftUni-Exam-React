import { useContext } from 'react'
import styles from './../auth.module.scss'
import apiFetch from '../../../api'
import { useForm } from '../../../hooks/useForm'
import AuthContext from '../../../contexts/AuthContext'

const startUser = { username: "", email: "", password: "", repeatPassword: "" }
const path = 'users/register'

export default function Register() {
    const { data, changeHandler } = useForm(startUser)
    const { authenticateUser } = useContext(AuthContext)

    return (
        <section>
            <div>
                <h2>Register</h2>
                <div className={styles.register}>
                    <img src='https://w0.peakpx.com/wallpaper/310/1013/HD-wallpaper-mustang-car-cars.jpg' />
                    <form onSubmit={(e) => authenticateUser(e, data, path)} >
                        <h2>Carstagram</h2>
                        <input type="text" name="username" id="username" placeholder="Username" value={data.username} onChange={changeHandler} />
                        <input type="text" name="email" id="email" placeholder="Email" value={data.email} onChange={changeHandler} />
                        <input type="password" name="password" id="password" placeholder="Password" value={data.password} onChange={changeHandler} />
                        <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat Password" value={data.repeatPassword} onChange={changeHandler} />
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