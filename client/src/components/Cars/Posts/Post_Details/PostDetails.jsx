import { useParams } from 'react-router-dom'
import styles from './PostDetails.module.scss'
import { useEffect, useState } from 'react'
import apiFetch from '../../../../api'

export default function PostDetails() {
    const { _id } = useParams()
    const [post, setPost] = useState({})
    const [likes, setLikes] = useState(0)


    useEffect(() => {
        apiFetch.get(`posts/${_id}`)
            .then(data => data.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        apiFetch.get(`likes/${_id}`)
            .then(data => data.json())
            .then(data => setLikes(Number(data)))
    }, [likes])

    async function like() {
        const request = await apiFetch.post(`likes/${_id}`)
        const response = await request.json()
        setLikes(state => state + Number(response))
    }

    return (
        <div className={styles.details}>
            <img src={post.imageUrl}></img>
            <div className={styles.detailsInfo}>
                <div className={styles.detailsUser}>
                    <img src={post.owner?.imageUrl}></img>
                    <div className={styles.detailsPostInfo}>
                        <h2>{post.owner?.username}</h2>
                        <h3>{post.brand}</h3>
                        <p>{post.model} {post.productionYear}</p>
                    </div>
                </div>
                <div className={styles.detailsDescription}>
                    <p>{post.description}</p>
                </div>
                <div className={styles.detailsComments}>
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
                </div>
                <div className={styles.detailsInteract}>
                    <div className={styles.detailsLike}>
                        <p>{likes} Likes</p>
                        <button onClick={like}>Like</button>
                    </div>
                    <form>
                        <textarea type='text' name='comment' id='comment' placeholder='Add comment...' />
                    </form>
                </div>
            </div>
        </div>
    )
}