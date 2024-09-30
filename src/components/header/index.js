import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './styles';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
                <Navbar.Brand 
                    href="/home" 
                    className="order-2 d-none d-md-block" 
                    style={styles.navbarBrand}
                >
                    Information Retrieval and Language Processing Lab
                </Navbar.Brand>
                <Navbar.Brand 
                    href="/home" 
                    className="order-2 d-block d-md-none" 
                    style={styles.navbarBrandMobile}
                >
                    Information Retrieval and Language Processing Lab
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="order-3">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home" style={styles.navLink}>Home</Nav.Link>
                        <Nav.Link href="/people" style={styles.navLink}>People</Nav.Link>
                        <Nav.Link href="/research" style={styles.navLink}>Research</Nav.Link>
                        <Nav.Link href="/publications" style={styles.navLink}>Publications</Nav.Link>
                        <Nav.Link href="/events" style={styles.navLink}>Events</Nav.Link>
                        <Nav.Link href="/contact" style={styles.navLink}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
