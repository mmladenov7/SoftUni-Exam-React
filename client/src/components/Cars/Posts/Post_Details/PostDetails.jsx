import styles from './PostDetails.module.scss'

export default function PostDetails() {
    return (
        <div className={styles.details}>
            <img src="https://wallpapers.com/images/featured/4k-car-g6a4f0e15hkua5oa.jpg"></img>
            <div className={styles.detailsInfo}>
                <div className={styles.detailsUser}>
                    <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"></img>
                    <div className={styles.detailsPostInfo}>
                        <h2>Username</h2>
                        <h3>Mercedes-Benz</h3>
                        <p>AMG GT-R 2020</p>
                    </div>
                </div>
                <div className={styles.detailsDescription}>
                    <p>Mercedes-Benz traces its origins to Karl Benz's first internal combustion engine in a car, seen in the Benz Patent Motorwagen – financed by Bertha Benz's dowry[10] and patented in January 1886[11] – and Gottlieb Daimler and their engineer Wilhelm Maybach's conversion of a stagecoach, with the addition of a petrol engine, introduced later that year. </p>
                </div>
                <div className={styles.detailsComments}>
                    {/* TODO */}
                </div>
                <div className={styles.detailsInteract}>
                    <div className={styles.detailsLike}>
                        <button>Like</button>
                    </div>
                    <form>
                        <textarea type='text' name='comment' id='comment' placeholder='Add comment...' />
                    </form>
                </div>
            </div>
        </div>
    )
}