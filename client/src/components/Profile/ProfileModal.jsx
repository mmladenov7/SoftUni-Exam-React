import apiFetch from '../../api'
import { useForm } from '../../hooks/useForm'
import styles from './Profile.module.scss'
import AuthContext from '../../contexts/AuthContext'
import { useContext } from 'react'

export default function ProfileModal({updateImage}) {
    const { user } = useContext(AuthContext)
    const { data, changeHandler } = useForm({
        imageUrl: ""
    })

    function submitHandler(e) {
        e.preventDefault()

        apiFetch.put(`users/${user._id}`, data)
        updateImage(data)
    }

    return (
        <div className={styles.modalContainer}>
            <form onSubmit={submitHandler}>
                <input name='imageUrl' placeholder='Image URL' value={data.imageUrl} onChange={changeHandler}></input>
                <button>Change Profile Picture</button>
            </form>
        </div>
    )
}