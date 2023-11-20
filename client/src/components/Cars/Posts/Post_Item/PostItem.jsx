import styles from './PostItem.module.scss'

export default function PostItem() {
    return (
        <div className={styles.container}>
            <img src='https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg' />
            <div className={styles.data}>
                <div className={styles.brand}>
                    <h3>Mercedes-Benz</h3>
                </div>
                <div className={styles.info}>
                    <h4>S Class 2019</h4>
                </div>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum aspernatur sequi asperiores iste nostrum! Praesentium corrupti illo repudiandae consectetur.</p>
                </div>
            </div>
        </div>
    )
}



// <div className={styles["container"]}>
// <div className={styles["wrapper"]}>
//     <img src='https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' className={styles["banner - image"]}> </img>
//     <h1> Toyota Supra</h1>
//     <p>Lorem ipsum dolor sit amet, <br />
//         consectetur adipiscing elit.</p>
// </div>
// <div className={styles["button - wrapper"]}>
//     <button className={styles["btn outline"]}>DETAILS</button>
//     <button className={styles["btn fill"]}>BUY NOW</button>
// </div >
// </div >