import styles from './PostItem.module.scss'
import {Link} from 'react-router-dom'

export default function PostItem({
    _id,
    imageUrl,
    brand,
    model,
    productionYear,
    description
}) {

    return (
        <div className={styles.container}>
            <Link to={`/posts/${_id}`}><img src={imageUrl} /></Link>
            <div className={styles.data}>
                <div className={styles.brand}>
                    <h3>{brand}</h3>
                </div>
                <div className={styles.info}>
                    <h4>{model} {productionYear}</h4>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
