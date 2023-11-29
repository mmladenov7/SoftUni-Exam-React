import { useParams } from 'react-router-dom'
import styles from './PostDetails.module.scss'
import { useEffect, useState } from 'react'
import apiFetch from '../../../../api'

export default function PostDetails() {
    const { _id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        apiFetch.get(`posts/${_id}`)
        .then(data => data.json())
        .then(data => setPost(data))
    }, [])


    return (
        <div className={styles.details}>
            <img src={post.imageUrl}></img>
            <div className={styles.detailsInfo}>
                <div className={styles.detailsUser}>
                    <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"></img>
                    <div className={styles.detailsPostInfo}>
                        <h2>Username</h2>
                        <h3>{post.brand}</h3>
                        <p>{post.model} {post.productionYear}</p>
                    </div>
                </div>
                <div className={styles.detailsDescription}>
                    <p>{post.description}</p>
                </div>
                <div className={styles.detailsComments}>
                    {/* TODO */}
                </div>
                <div className={styles.detailsInteract}>
                    <div className={styles.detailsLike}>
                        <button>Like</button>
                    </div>
                    <form>
                        <textarea type='text' name='comment' id='comment' placeholder='Add comment...' />
                    </form>
                </div>
            </div>
        </div>
    )
}