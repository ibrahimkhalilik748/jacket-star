import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import TrackJacketWomen from './images/Track Jacket Women/Track Jacket Women.jpg'
import BlackTrackJacket from './images/Black Track Jacket/Black Track Jacket.jpg'


const Post = () => {
    return (
        <div id="post" className="container">
            <br />
            <br />
            <br />
            <div className={styles.home}>
                <h2>Post</h2>
                <div className={styles.boxs}>
                    <div className={styles.box}>
                        <Link href="/track-jacket-women" alt="track jacket women">
                            <a>
                                <div className={styles.img} >
                                    <Image src={TrackJacketWomen} alt="Track Jacket Women" />
                                </div>
                                <h4 >Track Jacket Women</h4>
                                <p>Although many of us have been wearing tanks and bicycle shorts all summer long, it is time to add our favorite jackets and trousers back to our cabinets in the fall. Girlfriend Collective is a brand best known for its comfortable leggings, including size, though we are excited about the recently launched Track Jacket Women.</p>
                            </a>

                        </Link>
                    </div>
                    <div className={styles.box}>
                        <Link href="/black-track-jacket" alt="Black Track Jacket">
                            <a >
                                <div className={styles.img} >
                                    <Image src={BlackTrackJacket} alt="black track jacket" />
                                </div>
                                <h4 >Black Track Jacket</h4>
                                <p>When you are like us, you black track jacket spend most of your time wearing different sports clothes. Comfort above all! And Kate Mara seems to agree...</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;