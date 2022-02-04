import Link from 'next/link';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';

const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('jacketstar82', 'template_wh4gxyy', e.target, 'user_yV1uWTAHBU3WIKO1Ovbwp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contact" className="container">
            <br />
            <br />
            <br />
            <div className={styles.Contact}>
                <h1 className="fw-bold text-center">GET IN TOUCH</h1><br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.align}>

                            <h3 className="fw-bold">DONT BE SHY !</h3>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="" />
                                </div>
                                <div className="col-10 text-start">
                                    <p style={{ fontSize: '14px' }}>Mail Me<br />
                                        jacketstar82@gmail.com</p>
                                </div>
                            </div>
                            <br />
                            {/* <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid mt-2" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" alt="" />
                                </div>
                                <div className="col-10 text-start">
                                    <p style={{ fontSize: '14px' }}>Call Me<br />
                                        +8801881805720</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-8 align">
                        <div className={styles.align}>
                            <form onSubmit={sendEmail}>
                                <input type="name" name="name" placeholder="Your Name" />
                                <input type="email" name="email" placeholder="Your Email" />
                                <input type="subject" name="subject" placeholder="Your Subject" /> <br />
                                <textarea type="message" name="message" placeholder="Your Message" cols="60" rows="5"  ></textarea><br />
                                <button className="btn btn-outline-dark">Sent Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>

        </div>
    );
};

export default Contact;