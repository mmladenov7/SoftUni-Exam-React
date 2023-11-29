import { useContext } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

export default function Header() {
    const { user } = useContext(AuthContext)
    const isLogged = Object.keys(user).length > 0

    return (
        <nav className={styles.header}>
            <ul>
                <li><Link to="/posts">All Posts</Link></li>
                {isLogged ?
                    <>
                        <li><Link to="/posts/create">Create Post</Link></li>
                        <li><Link to="/users/">Profile</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/users/register">Register</Link></li>
                        <li><Link to="/users/login">Login</Link></li>
                    </>
                }
                <li className={styles.logo}><Link to="/">Carstagram</Link></li>
            </ul>
        </nav>
    )
}