import { useEffect, useState } from 'react'
import PostItem from '../Cars/Posts/Post_Item/PostItem'
import styles from './HomePage.module.scss'
import apiFetch from '../../api'

export default function HomePage() {
    const [likedPost, setLikedPost] = useState({})
    const [commentPost, setcommentPost] = useState({})

    useEffect(() => {
        apiFetch.get("posts/mostLiked")
            .then(data => data.json())
            .then(data => setLikedPost(data))

        apiFetch.get("posts/mostCommented")
            .then(data => data.json())
            .then(data => setcommentPost(data))
    }, [])

    return (
        <div className={styles.homePageRoot}>
            <div className={styles.homeLogo}>
                <h1>Carstagram</h1>
            </div>
            <div className={styles.homeDiv}>
                <div className={styles.mostLikedPost}>
                    <h2>Most liked post:</h2>
                    <PostItem
                        key={likedPost._id}
                        _id={likedPost._id}
                        imageUrl={likedPost.imageUrl}
                        brand={likedPost.brand}
                        model={likedPost.model}
                        productionYear={likedPost.productionYear}
                        description={likedPost.description}
                    />
                </div>
                <div className={styles.test}>

                </div>
                <div className={styles.mostCommentedPost}>
                    <h2>Most commented post:</h2>
                    <PostItem
                        key={commentPost._id}
                        _id={commentPost._id}
                        imageUrl={commentPost.imageUrl}
                        brand={commentPost.brand}
                        model={commentPost.model}
                        productionYear={commentPost.productionYear}
                        description={commentPost.description}
                    />
                </div>
            </div>
        </div>
    )
}