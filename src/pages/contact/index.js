import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <Row>
        <Col md={12}>
          <h2>Information Retrieval and Language Processing Lab (IRLP Lab)</h2>
          <p>
            CEP-003, DA-IICT,<br />
            Reliance Cross Rd, Gandhinagar,<br />
            Gujarat 382007
          </p>
          <p>
            <strong>Phone:</strong> 079-30510638<br />
            <strong>Email:</strong> <a href="mailto:irlab@daiict.ac.in">irlab@daiict.ac.in</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
