import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import DP from './images/Jacket Star.png';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    return (
        <div >
            <Navbar fixed="top" className={styles.Navigation} expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="row">
                            <div className="col-2">
                                <div className={styles.dp}>
                                    <Image src={DP} alt="Jacket Star" />
                                </div>
                            </div>
                            <div className="col-10 text-start">
                                <h2>Jacket Star</h2>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav style={{ width: '100%' }}>
                            <ul className="">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/#post">post</Link>
                                </li>
                                <li>
                                    <Link href="/#review">Reviews</Link>
                                </li>
                                <li>
                                    <Link href="/#contact">Contact</Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;