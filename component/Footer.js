import React from 'react';
import styles from '../styles/Footer.module.css';
import Logo from './images/Jacket Star.png';
import Facebook from './images/facebook.png';
import Pinterest from './images/Pinterest.png';
import Twitter from './images/twitter.png';
import Youtube from './images/Youtube.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className="row pt-3 pb-3">
                    <div className="col-md-4">
                        <div className={styles.logo}>
                            <Image src={Logo} alt="Jacket Star" />
                        </div>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Jacket Star</h1>
                        <br />
                        <p>Since 1957, GQ has encouraged men to look sharp and live intelligently with an unparalleled blend of style, culture, and more. From award-winning writing and photography to highly acclaimed videos to live electronic events, GQ meets millions of modern men where he lives, creating moments that create conversations.</p>
                        <br />
                        <div className={styles.icons}>
                            <Link href="https://www.facebook.com/jacketStar/" target="_blank">
                                <div className={styles.img}>
                                    <Image src={Facebook} alt="Facebook" />
                                </div>
                            </Link>
                            <Link href="">
                                <div className={styles.img}>
                                    <Image src={Pinterest} alt="Pinterest" />
                                </div>
                            </Link>
                            <Link href="">
                                <div className={styles.img}>
                                    <Image src={Twitter} alt="Twitter" />
                                </div>
                            </Link>
                            <Link href="">
                                <div className={styles.img}>
                                    <Image src={Youtube} alt="Youtube" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;