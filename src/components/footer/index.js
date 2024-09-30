import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-dark mt-5">
            <Container>
                <Row className="py-4 align-items-center">
                    <Col md={2}></Col>
                    <Col md={3} className="text-center text-md-start">
                        <h1>IRLP Lab</h1>
                    </Col>
                    <Col md={1} className="text-center d-none d-md-block">
                        <div style={{ borderLeft: '2px solid #ccc', height: '100px' }}></div>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <p>
                            Information Retrieval and Language Processing Lab (IRLP Lab) <br />
                            CEP-003, DA-IICT, Reliance Cross Road, Gandhinagar, <br />
                            Gujarat-382007 <br />
                            Phone: 079-30510638 <br />
                            Email: irlab@daiict.ac.in
                        </p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
