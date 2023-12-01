import styles from './Profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.profileBody}>
            <div className={styles.profilePictureContainer}>
                <div className={styles.profilePicture}>
                    <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
                </div>
            </div>
            <h1 className={styles.username}>Ragnarol</h1>
            <div className={styles.postbuttons}>
                <button>Posts</button>
                <button>Liked posts</button>
            </div>
            <div className={styles.profilePosts}>
                <div className={styles.profilePostCard}>
                    <img src='https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg' />
                </div>
                <div className={styles.profilePostCard}>
                    <img src='https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg' />
                </div>
                <div className={styles.profilePostCard}>
                    <img src='https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg' />
                </div>
                <div className={styles.profilePostCard}>
                    <img src='https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg' />
                </div>

            </div>
        </div>
    )
}