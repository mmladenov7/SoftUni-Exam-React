import styles from './PostDetails.module.scss'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm'

import AuthContext from '../../../../contexts/AuthContext'
import apiFetch from '../../../../api'

import Comments from './Comments/Comments'
import DeleteModal from './DeleteModal'


export default function PostDetails() {
    const { _id } = useParams()
    const [post, setPost] = useState({})
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)
    const [comments, setComments] = useState([])
    const { data, changeHandler, cleanData } = useForm({
        text: ""
    })
    const { user } = useContext(AuthContext)
    const [deleteModal, setDeleteModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        apiFetch.get(`posts/${_id}`)
            .then(res => res.json())
            .then(res => setPost(res))
    }, [])

    useEffect(() => {
        apiFetch.get(`likes/${_id}`)
            .then(res => res.json())
            .then(res => {
                let hasLiked = res.find(x => x.user == user._id)
                setLiked(hasLiked ? true : false)
                setLikes(res.length)
            })
    }, [likes])

    useEffect(() => {
        apiFetch.get(`comments/${_id}`)
            .then(res => res.json())
            .then(res => setComments(res))
    }, [])

    useEffect(() => {
    }, [comments])


    async function like() {
        const request = await apiFetch.post(`likes/${_id}`)
        const response = await request.json()
        setLikes(state => state + Number(response))
        setLiked(state => !state)
    }

    async function commentSubmitHandler(e) {
        e.preventDefault()

        const response = await apiFetch.post(`comments/${_id}`, data)
        const comment = await response.json()

        setComments(state => [...state, comment])
        cleanData()
    }

    function hideDeleteModal() {
        setDeleteModal(false)
    }

    async function deletePostHandler() {
        await apiFetch.del(`posts/${_id}`)
        navigate('/posts')
    }


    return (
        <div className={styles.details}>
            <img src={post.imageUrl}></img>
            <div className={styles.detailsInfo}>
                {deleteModal ? <DeleteModal
                    onClose={hideDeleteModal}
                    onDelete={deletePostHandler}
                /> :
                    <div className={styles.detailsUser}>
                        <div className={styles.imageContainer}>
                            <Link to={`/users/${post.owner?._id}`}><img src={post.owner?.imageUrl} alt='https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg'></img></Link>
                        </div>
                        <div className={styles.detailsPostInfo}>
                            <h2>{post.owner?.username}</h2>
                            <h3>{post.brand}</h3>
                            <p>{post.model} {post.productionYear}</p>
                        </div>
                        {user._id == post.owner?._id &&
                            <div className={styles.detailsButtons}>
                                <button onClick={() => navigate(`/posts/${_id}/edit`, { state: post })}>Edit</button>
                                <button onClick={() => setDeleteModal(true)}>Delete</button>
                            </div>}
                    </div>}
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
                        isOwner={user._id == x.user?._id}
                        _id={x._id}
                        edditComment={(c) => setComments(c)}
                    />)}
                </div>
                <div className={styles.detailsInteract}>
                    <div className={styles.detailsLike}>
                        <p>{likes} Likes</p>
                    </div>
                    {Object.keys(user).length > 0 ?
                        <div className={styles.likeBtn}>
                            <button onClick={like}>{liked ? "Dislike" : "Like"}</button>
                            <form onSubmit={commentSubmitHandler}>
                                <textarea type='text' name='text' id='comment' placeholder='Add comment...' value={data.text} onChange={changeHandler} />
                                {data.text.length > 0 && <button type='submit'>Comment</button>}
                            </form>
                        </div>
                        :
                        <div className={styles.noUser}>
                            <h2><Link to="/users/login">Log in</Link> to interact</h2>
                        </div>}
                </div>
            </div>
        </div>
    )
}