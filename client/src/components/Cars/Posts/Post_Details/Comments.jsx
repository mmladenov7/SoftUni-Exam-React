import styles from './PostDetails.module.scss'

export default function Comments() {
    <div className={styles.comment}>
        <div className={styles.commentImg}>
            <img src='https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg' />
        </div>
        <div className={styles.commentInfo}>
            <h2>Username</h2>
            <div className={styles.commentText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem debitis facilis eum voluptatibus quidem molestiae minus earum soluta? Doloremque, expedita!</p>
            </div>
        </div>
    </div>
}