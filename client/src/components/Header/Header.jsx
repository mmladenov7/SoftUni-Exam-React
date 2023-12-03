import { useContext } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

export default function Header() {
    const { user, logoutUser } = useContext(AuthContext)
    const isLogged = Object.keys(user).length > 0
    const profile = `/users/${user._id}`

    return (
        <nav className={styles.header}>
            <ul>
                {isLogged ?
                    <>
                        <li onClick={logoutUser}><Link to="/users/logout">Logout</Link></li>
                        <li><Link to={profile}>Profile</Link></li>
                        <li><Link to="/posts/create">Create Post</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/users/register">Register</Link></li>
                        <li><Link to="/users/login">Login</Link></li>
                    </>
                }
                <li className={styles.logo}><Link to="/">Carstagram</Link></li>
                <li><Link to="/posts">All Posts</Link></li>
            </ul>
        </nav>
    )
}