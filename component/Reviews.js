import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import BestRunningJackets from './images/10 Best Running Jackets.jpg'
import blackTrackJacketReview from './images/black track jacket review.jpg'

const Reviews = () => {
    return (
        <div id="review" className="container">
            <br />
            <br />
            <br />
            <div className={styles.home}>
                <h2>Reviews</h2>
                <div className={styles.boxs}>
                    <div className={styles.boxReview}>
                        <Link href="/best-running-jackets" alt="10 Best Running Jackets">
                            <a>
                                <div className={styles.imgReview} >
                                    <Image src={BestRunningJackets} alt="10 Best Running Jackets" />
                                </div>
                                <h4 >10 Best Running Jackets For Women Of 2022</h4>
                                <p>10 Best Running Jackets For Women Of 2022 That Won’t Turn You In To A Sweaty Mess</p>
                            </a>
                        </Link>
                    </div>
                    
                    <div className={styles.boxReview}>
                        <Link href="/black-track-jacket-review" alt="black-track-jacket-review">
                            <a>
                                <div className="m-auto" style={{ width:"50%"}} >
                                    <Image src={blackTrackJacketReview} alt="black track jacket review" />
                                </div>
                                <h4 >black-track-jacket-review</h4>
                                <p>A brand new version of Track Jacket, with updated updates and new front-facing softshell panels. The collar of the varsity jacket with ribs makes it fit snugly and allows it to be used as a mid-layer piece in bad weather.</p>
                            </a>
                        </Link>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Reviews;