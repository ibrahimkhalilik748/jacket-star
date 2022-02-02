import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import IMG from '../component/images/Jacket-Star.jpg'
import IMG2 from '../component/images/Jacket-Star-man.jpg'

const Main = () => {
    return (
        <div id="home" className="container">
            <br />
            <br />
            <br />
            <div className={styles.home}>
                <h1>Jacket Star</h1>
                <p>We have jackets for songs of all prints and colors but if there was one take on a template that provided a large amount of your money it would have to be bright red. There is a reason that the color red is considered the color of energy; bold but not very showy and flattering in all its colors. The track jacket is reminiscent of Bjorn Borg and John McEnroe in the late’ 70s, which is just cool, and the only proper sport in everything from denim to swimming trunks. Whether you build a designer or an old school is up to you, just do us a favor and wear this sleeveless top.</p>
                <div className="row">
                    <div className="col-6">
                        <Image src={IMG} alt="Jacket Star" />
                    </div>
                    <div className="col-6">
                        <Image src={IMG2} alt="Jacket Star" />
                    </div>
                </div>
                <br />
                <br />
                <p>If you want to know why men’s clothing has reached the maximalist overdrive in 2017, do not look at the short but powerful passing of Alessandro Michele in Gucci. As the designer has taken the lead in creating the iconic Italian house, he has entered a new era of sparkling patterns, rich colors, embellished everything, and the general feeling that brightness is better. And this track jacket is a perfect example of that ethos. It takes everything we love about the retro athletic silhouette and twists it in a new way — and the Gucci — style. (Gucci <b>G</b> has been converted into cubist prints in a combination of red and green that are commonly used in the house while the popular web line design is identified in the details of the arm.) A guaranteed piece of attention. for all the right reasons if you wear it properly ...</p>
            </div>
            {/* <Link href="/track-jacket-women">Track Jacket Women</Link><br />
            <Link href="/palm-angels-track-jacket">Palm Angels Track Jacket</Link><br />
            <Link href="/black-track-jacket">Black Track Jacket</Link><br />
            <Link href="/best-running-jackets">best-running-jackets</Link><br /> */}
        </div>
    );
};

export default Main;