import styles from './PostItem.module.scss'

export default function PostItem({
    imageUrl,
    brand,
    model,
    productionYear,
    description
}) {

    return (
        <div className={styles.container}>
            <img src={imageUrl} />
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
