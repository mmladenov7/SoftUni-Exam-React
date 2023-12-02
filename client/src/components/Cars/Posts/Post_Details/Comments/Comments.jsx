import { Link } from 'react-router-dom'
import styles from '../PostDetails.module.scss'

export default function Comments({
    imageUrl,
    username,
    userId,
    text
}) {
    return (
        <div className={styles.comment}>
            <div className={styles.commentImg}>
                <Link to={`/users/${userId}`}><img src={imageUrl} /></Link>
            </div>
            <div className={styles.commentInfo}>
                <h2>{username}</h2>
                <div className={styles.commentText}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}