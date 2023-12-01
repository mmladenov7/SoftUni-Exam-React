import styles from './Profile.module.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiFetch from '../../api'
import ProfilePost from './ProfilePost'

export default function Profile() {
    const { _id } = useParams()
    const [currentUser, setCurrentUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        apiFetch.get(`users/${_id}`)
            .then(data => data.json())
            .then(data => setCurrentUser(data))
    }, [])

    useEffect(() => {
        apiFetch.get(`posts/user/${_id}`)
            .then(data => data.json())
            .then(data => setPosts(data))
    }, [])

    useEffect(() => {
    }, [posts])

    function gatherPosts(e) {
        const path = e.target.name

        apiFetch.get(`${path}/user/${_id}`)
            .then(data => data.json())
            .then(data => setPosts(data))
    }

    return (
        <div className={styles.profileBody}>
            <div className={styles.profilePictureContainer}>
                <div className={styles.profilePicture}>
                    <img src={currentUser?.imageUrl} />
                </div>
            </div>
            <h1 className={styles.username}>{currentUser?.username}</h1>
            <div className={styles.postbuttons}>
                <button name='posts' onClick={gatherPosts}>Posts</button>
                <button name='likes' onClick={gatherPosts}>Liked posts</button>
            </div>
            <div className={styles.profilePosts}>
                {posts.map(x => (
                    <ProfilePost
                        key={x._id}
                        _id={x._id}
                        imageUrl={x.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}