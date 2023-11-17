import styles from './Header.module.scss'

export default function Header() {
    return (
        <nav className={styles.header}>
            <ul>
                <li><a href="/users/register">Profile</a></li>
                <li><a href="/users/register">Register</a></li>
                <li><a href="/users/login">Login</a></li>
                <li className={styles.logo}><a href="/">Carstagram</a></li>
            </ul>
        </nav>
    )
}