import { useContext, useEffect } from 'react'
import styles from './Error.module.scss'
import ErrorContext from '../../contexts/ErrorContext'

export default function Error() {
    const { error, hideError } = useContext(ErrorContext)

    useEffect(() =>{
        setTimeout(() => hideError(), 5000)
    }, error)

    return (
        <div>
            {error && <div className={styles.errorContainer}>
                <h2>{error}!</h2>
            </div>}
        </div>
    )
}