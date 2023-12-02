import styles from '../../post.module.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../../../hooks/useForm'
import apiFetch from '../../../../api'

export default function EditPost() {
    const location = useLocation()
    const fullPost = location.state
    const updatePost = { imageUrl: fullPost.imageUrl, brand: fullPost.brand, model: fullPost.model, productionYear: fullPost.productionYear, description: fullPost.description }
    const { data, changeHandler } = useForm(updatePost)


    async function onSubmitHandler(e) {
        e.preventDefault()

        const updatedAt = new Date().toLocaleDateString("en-gb")
        const newPost = { ...data, updatedAt }

        const response = await apiFetch.post(`posts/${fullPost._id}/edit`, newPost)


        // if (response.status == 200) {
        //     navigate("/posts")
        // }

        console.log(newPost)
    }

    useEffect(() => {
        console.log(updatePost)
        console.log(data)

    }, [])

    return (
        <section>
            <div>
                <h2>Create Post</h2>
                <div className={styles.post}>
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Carstagram</h2>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value={data.imageUrl} onChange={changeHandler} />
                        <input type="text" name="brand" id="brand" placeholder="Brand" value={data.brand} onChange={changeHandler} />
                        <input type="text" name="model" id="model" placeholder="Model" value={data.model} onChange={changeHandler} />
                        <input type="text" name="productionYear" id="productionYear" placeholder="Production Year" value={data.productionYear} onChange={changeHandler} />
                        <input type="text" name="description" id="description" placeholder="Description" value={data.description} onChange={changeHandler} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
