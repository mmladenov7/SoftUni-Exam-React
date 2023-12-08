import styles from '../../post.module.scss'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"

import ErrorContext from '../../../../contexts/ErrorContext'

import apiFetch from '../../../../api'
import { postValidator } from '../../postUtils'

const startPost = { imageUrl: "", brand: "", model: "", description: "", productionYear: "" }

export default function CreatePost() {
    const [post, setPost] = useState(startPost)
    const navigate = useNavigate()
    const { showError } = useContext(ErrorContext)

    function changeHandler(e) {
        setPost(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            postValidator(post)
            const createdAt = new Date().toLocaleDateString("en-gb")
            const newPost = { ...post, createdAt }

            const response = await apiFetch.post("posts/create", newPost)

            if (response.status == 200) {
                navigate("/posts")
            }
        } catch (err) {
            showError(err.message)
        }

    }

    return (
        <section>
            <div className={styles.create}>
                <div className={styles.post}>
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Create Post</h2>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value={post.imageUrl} onChange={changeHandler} />
                        <input type="text" name="brand" id="brand" placeholder="Brand" value={post.brand} onChange={changeHandler} />
                        <input type="text" name="model" id="model" placeholder="Model" value={post.model} onChange={changeHandler} />
                        <input type="number" name="productionYear" id="productionYear" placeholder="Production Year" value={post.productionYear} onChange={changeHandler} />
                        <input type="text" name="description" id="description" placeholder="Description" value={post.description} onChange={changeHandler} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}