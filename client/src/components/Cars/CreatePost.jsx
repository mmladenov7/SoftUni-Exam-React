import { useEffect, useState } from 'react'
import styles from './post.module.scss'
import apiFetch from '../../api'
import { useNavigate } from "react-router-dom"

const startPost = { imageUrl: "", brand: "", model: "", description: "", productionYear: "" }

export default function CreatePost() {
    const [post, setPost] = useState(startPost)
    const navigate = useNavigate()

    function changeHandler(e) {
        setPost(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault()

        const createdAt = new Date().toLocaleDateString("en-gb")
        const newPost = { ...post, createdAt }

        const response = await apiFetch.post("posts/create", newPost)


        if (response.status == 200) {
            navigate("/posts")
        }
    }

    return (
        <section>
            <div>
                <h2>Create Post</h2>
                <div className={styles.post}>
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Carstagram</h2>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value={post.imageUrl} onChange={changeHandler} />
                        <input type="text" name="brand" id="brand" placeholder="Brand" value={post.brand} onChange={changeHandler} />
                        <input type="text" name="model" id="model" placeholder="Model" value={post.model} onChange={changeHandler} />
                        <input type="text" name="productionYear" id="productionYear" placeholder="Production Year" value={post.productionYear} onChange={changeHandler} />
                        <input type="textarea" name="description" id="description" placeholder="Description" value={post.description} onChange={changeHandler} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}