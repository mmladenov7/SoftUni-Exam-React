import styles from './Profile.module.scss'

export default function Profile() {
    return (
        <div>
            <div className={styles.profilePicture}>
                <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
            </div>
            <h1 className={styles.username}>Ragnarol</h1>
            <div className={styles.postbuttons}>
                <button>Posts</button>
                <button>Liked posts</button>
            </div>
        </div>
    )
}