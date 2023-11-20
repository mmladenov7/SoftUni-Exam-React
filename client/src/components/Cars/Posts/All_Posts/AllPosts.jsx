import PostItem from "../Post_Item/PostItem";
import styles from "./AllPosts.module.scss"

export default function AllPosts() {
    return (
        <div className={styles.container}>
            <PostItem />
            <PostItem />
        </div>
    )
}