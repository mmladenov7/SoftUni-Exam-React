import styles from './PostDetails.module.scss'

import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm'

import apiFetch from '../../../../api'
import Comments from './Comments'

export default function PostDetails() {
    const { _id } = useParams()
    const [post, setPost] = useState({})
    const [likes, setLikes] = useState(0)
    const [comments, setComments] = useState([])
    const { data, changeHandler } = useForm({
        text: ""
    })


    useEffect(() => {
        apiFetch.get(`posts/${_id}`)
            .then(res => res.json())
            .then(res => setPost(res))
    }, [])

    useEffect(() => {
        apiFetch.get(`likes/${_id}`)
            .then(res => res.json())
            .then(res => setLikes(Number(res)))
    }, [likes])

    useEffect(() => {
        apiFetch.get(`comments/${_id}`)
            .then(res => res.json())
            .then(res => setComments(res))
    }, [])

    useEffect(() => {
        console.log(comments)
    }, [comments])

    async function like() {
        const request = await apiFetch.post(`likes/${_id}`)
        const response = await request.json()
        setLikes(state => state + Number(response))
    }

    async function submitHandler(e) {
        e.preventDefault()

        const response = await apiFetch.post(`comments/${_id}`, data)
        const comment = await response.json()

        setComments(state => [...state, comment])
    }

    return (
        <div className={styles.details}>
            <img src={post.imageUrl}></img>
            <div className={styles.detailsInfo}>
                <div className={styles.detailsUser}>
                    <div className={styles.imageContainer}>
                        <Link to={`/users/${post.owner?._id}`}><img src={post.owner?.imageUrl}></img></Link>
                    </div>
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
                    {comments.map(x => <Comments
                        key={x._id}
                        imageUrl={x.user?.imageUrl}
                        username={x.user?.username}
                        userId={x.user?._id}
                        text={x.text}
                    />)}
                </div>
                <div className={styles.detailsInteract}>
                    <div className={styles.detailsLike}>
                        <p>{likes} Likes</p>
                        <button onClick={like}>Like</button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <textarea type='text' name='text' id='comment' placeholder='Add comment...' value={data.text} onChange={changeHandler} />
                        {data.text.length > 0 && <button type='submit'>Comment</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}