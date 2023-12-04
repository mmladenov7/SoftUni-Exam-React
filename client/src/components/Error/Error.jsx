import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Error.module.scss'
import ErrorContext from '../../contexts/ErrorContext'

export default function Error() {
    const { error, hideError } = useContext(ErrorContext)
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => hideError(), 5000)
    }, [error])

    useEffect(() => {
        hideError()
    }, [location])

    return (
        <div>
            {error && <div className={styles.errorContainer}>
                <h2>{error}!</h2>
            </div>}
        </div>
    )
}