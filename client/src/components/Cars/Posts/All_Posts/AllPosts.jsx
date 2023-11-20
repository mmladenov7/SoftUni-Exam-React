import { useEffect, useState } from "react";
import PostItem from "../Post_Item/PostItem";
import styles from "./AllPosts.module.scss"
import apiFetch from "../../../../api";

export default function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        apiFetch.get("posts")
            .then(data => data.json())
            .then(result => setPosts(result))
    }, [posts])

    return (
        <>
            <div className={styles.container}>
                {posts.map((x) => (
                    <PostItem
                        key={x._id}
                        imageUrl={x.imageUrl}
                        brand={x.brand}
                        model={x.model}
                        productionYear={x.productionYear}
                        description={x.description}
                    />
                ))}
            </div>
            <div className={styles.addition}>
            </div>
        </>
    )
}