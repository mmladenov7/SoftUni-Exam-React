import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className={styles.header}>
            <ul>
                <li><Link to="/posts">All Posts</Link></li>
                <li><Link to="/posts/create">Create Post</Link></li>
                <li><Link to="/users/register">Profile</Link></li>
                <li><Link to="/users/register">Register</Link></li>
                <li><Link to="/users/login">Login</Link></li>
                <li className={styles.logo}><Link to="/">Carstagram</Link></li>
            </ul>
        </nav>
    )
}