import { Link } from 'react-router-dom'
import styles from './Profile.module.scss'

export default function ProfilePost({
    _id,
    imageUrl
}) {
    return (
        <div className={styles.profilePostCard}>
            <Link to={`/posts/${_id}`}><img src={imageUrl} /></Link>
        </div>
    )
}