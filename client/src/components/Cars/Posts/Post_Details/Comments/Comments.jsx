import { Link } from 'react-router-dom'
import styles from './Comments.module.scss'
import { useState } from 'react'
import { useForm } from '../../../../../hooks/useForm'
import apiFetch from '../../../../../api'


export default function Comments({
    imageUrl,
    username,
    userId,
    text,
    isOwner,
    _id,
    edditComment
}) {
    const [editing, setEditing] = useState(false)
    const { data, changeHandler } = useForm({ text })

    async function editHandler(e) {
        e.preventDefault()

        const response = await apiFetch.put(`comments/${_id}`, data)
        const comment = await response.json()
        edditComment(state => state.map(x => x._id == _id ? { ...x, text: data.text } : x))
        setEditing(false)
    }

    async function deleteHandler() {
        const response = await apiFetch.del(`comments/${_id}`)
        edditComment(state => state.filter(x => x._id != _id))
    }

    return (
        <div className={styles.comment}>
            <div className={styles.commentImg}>
                <Link to={`/users/${userId}`}><img src={imageUrl} /></Link>
            </div>
            {editing ?
                <div className={styles.commentEditText}>
                    <form>
                        <textarea name="text" id="" value={data.text} onChange={changeHandler}></textarea>
                        {data.text != text &&
                            <button onClick={editHandler}>Send</button>}
                    </form>
                </div> :
                <div className={styles.commentInfo}>
                    <h2>{username}</h2>
                    <div className={styles.commentText}>
                        <p>{text}</p>
                    </div>
                </div>
            }
            {isOwner &&
                <div className={styles.commentBtns}>
                    <button onClick={() => setEditing(!editing)}>Edit</button>
                    <button onClick={deleteHandler}>Delete</button>
                </div>}
        </div>
    )
}