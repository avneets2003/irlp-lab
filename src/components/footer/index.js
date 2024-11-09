import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="text-dark mt-5" style={{ backgroundColor: '#e0f7e0' }}>
            <Container>
                <Row className="py-4 justify-content-center text-center">
                    <Col md={12}>
                        <div className="mb-3">
                            <a href="https://twitter.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1DA1F2' }} />
                            </a>
                            <a href="https://linkedin.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} />
                            </a>
                            <a href="https://github.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333' }} />
                            </a>
                            <a href="https://youtube.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#FF0000' }} />
                            </a>
                        </div>
                        <p>
                            Information Retrieval and Language Processing Lab (IRLP Lab)
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
