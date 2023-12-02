import styles from './PostDetails.module.scss'

export default function DeleteModal({
    onClose,
    onDelete
}) {
    return (
        <div className={styles.deleteModal}>
            <div className={styles.deleteText}>
                <h2>Are you sure you want to delete this post?</h2>
            </div>
            <div className={styles.deleteBtn}>
                <button onClick={onDelete}>YES</button>
                <button onClick={onClose}>NO</button>
            </div>
        </div>
    )
}