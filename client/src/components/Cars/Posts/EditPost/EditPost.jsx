import styles from '../../post.module.scss'
import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../../../hooks/useForm'
import apiFetch from '../../../../api'
import { postValidator } from '../../postUtils'
import ErrorContext from '../../../../contexts/ErrorContext'
import { errorThrower } from '../../../../utils/utils'
import AuthContext from '../../../../contexts/AuthContext'

export default function EditPost() {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useContext(AuthContext)
    const fullPost = location.state ? location.state : {}
    const { showError } = useContext(ErrorContext)
    const updatePost = { imageUrl: fullPost.imageUrl, brand: fullPost.brand, model: fullPost.model, productionYear: fullPost.productionYear, description: fullPost.description }
    const { data, changeHandler } = useForm(updatePost)

    useEffect(() => {
        if(user != fullPost.owner){
            navigate('/*')
        }
    }, [])

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            postValidator(data)
            const updatedAt = new Date().toLocaleDateString("en-gb")
            const newPost = { ...data, updatedAt }

            const response = await apiFetch.put(`posts/${fullPost._id}`, newPost)

            if (response.status == 200) {
                navigate(`/posts/${fullPost._id}`)
            } else {
                errorThrower(await response.text())
            }

        } catch (err) {
            showError(err.message)
        }

    }

    return (
        <section className={styles.edit}>
            <img src={fullPost.imageUrl}></img>
            <div>
                <div className={styles.post}>
                    <form onSubmit={(e) => onSubmitHandler(e)} >
                        <h2>Edit Post</h2>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value={data.imageUrl} onChange={changeHandler} />
                        <input type="text" name="brand" id="brand" placeholder="Brand" value={data.brand} onChange={changeHandler} />
                        <input type="text" name="model" id="model" placeholder="Model" value={data.model} onChange={changeHandler} />
                        <input type="number" name="productionYear" id="productionYear" placeholder="Production Year" value={data.productionYear} onChange={changeHandler} />
                        <input type="text" name="description" id="description" placeholder="Description" value={data.description} onChange={changeHandler} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
