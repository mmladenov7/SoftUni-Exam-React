import { useEffect, useState } from 'react'
import styles from './post.module.scss'
import apiFetch from '../../api'

const startPost = { imageUrl: "", brand: "", model: "", description: "", productionYear: "" }

export default function CreatePost() {
    const [post, setPost] = useState(startPost)

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

        const response = await apiFetch.post('posts/create', newPost)
        const test = await response.json()
        console.log(test)
    }

    return (
        <section>
            <div>
                <h2>Create Post</h2>
                <div className={styles.post}>
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Carstagram</h2>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="imageUrl" value={post.imageUrl} onChange={changeHandler} />
                        <input type="text" name="brand" id="brand" placeholder="brand" value={post.brand} onChange={changeHandler} />
                        <input type="text" name="model" id="model" placeholder="model" value={post.model} onChange={changeHandler} />
                        <input type="text" name="productionYear" id="productionYear" placeholder="productionYear" value={post.productionYear} onChange={changeHandler} />
                        <input type="textarea" name="description" id="description" placeholder="description" value={post.description} onChange={changeHandler} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}