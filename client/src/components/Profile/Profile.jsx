import styles from './Profile.module.scss'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiFetch from '../../api'
import ProfilePost from './ProfilePost'
import ProfileModal from './ProfileModal'
import AuthContext from '../../contexts/AuthContext'

export default function Profile() {
    const { user } = useContext(AuthContext)

    const { _id } = useParams()
    const [currentUser, setCurrentUser] = useState({})
    const [posts, setPosts] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        apiFetch.get(`users/${_id}`)
            .then(data => data.json())
            .then(data => setCurrentUser(data))
    }, [_id])

    useEffect(() => {
        apiFetch.get(`posts/user/${_id}`)
            .then(data => data.json())
            .then(data => setPosts(data))
    }, [_id])

    useEffect(() => {
    }, [posts, currentUser])

    function gatherPosts(e) {
        const path = e.target.name

        apiFetch.get(`${path}/user/${_id}`)
            .then(data => data.json())
            .then(data => setPosts(data))
    }

    function showModalHandler() {
        if (user._id === _id) {
            setShowModal(state => !state)
        }
    }

    function updateImage({ imageUrl }) {
        setCurrentUser(state => ({ ...state, imageUrl }))
        setShowModal(false)
    }

    return (
        <div className={styles.profileBody}>
            <div className={styles.profilePictureContainer}>
                {showModal && <ProfileModal updateImage={updateImage} user={user} />}
                <div className={styles.profilePicture}>
                    <img src={currentUser?.imageUrl} onClick={showModalHandler} />
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