import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Pages.module.css';
import blackTrackJacketReviews from '/component/images/black track jacket review.jpg'

const blackTrackJacketReview = () => {
    return (
        <div className="container">
            <Head>
                <title>Black Track Jacket Review</title>
                <meta name="description" content="Black Track Jacket Review" />
                <meta name="keywords" content="Black Track Jacket Review" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.page}>
                <br />
                <br />
                <br />
                <h1>Black Track Jacket Review</h1>
                <br />
                <div className="text-center">
                    <Image src={blackTrackJacketReviews} alt="black track jacket review" />
                </div>
                <p>A brand new version of <Link href="/black-track-jacket"><a>Black Track Jacket</a></Link> review, with updated updates and new front-facing softshell panels. The collar of the varsity jacket with ribs makes it fit snugly and allows it to be used as a mid-layer piece in bad weather.</p>
                <h6>Modern tracksuit jacket for segmentation and city use</h6>
                <p> Inspired by Rapha’s two well-known outfits, the Black Track Jacket is the perfect outfit for city surfing on cool days. The column, back, shoulders, and hem are made using a Rapha merino jersey fabric to relax, while the front panels are made of Rapha’s Classic Softshell material, both air resistant and modern, distinct.</p>

                <p>The varsity ‘collar’ collar makes it a perfect fit and allows the Black Track Jacket  to be used as a medium layer in bad weather. There are two hidden front zip pockets and an important interior pack.</p>
            </div>
        </div>
    );
};

export default blackTrackJacketReview;