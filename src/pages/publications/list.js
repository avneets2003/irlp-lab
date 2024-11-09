import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../data/publications.json';

const PublicationsPage = () => {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Publications</h1>
            <Row>
                <Col md={12}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {data.publications.map((pub, index) => (
                            <li key={index} style={{ marginBottom: '1rem' }}>
                                {/* MLA Citation Format */}
                                <p>
                                    <strong>{pub.authors.join(', ')}</strong>. "{pub.title}."
                                    {pub.conference && (
                                        <> <em>{pub.conference}</em>,</>
                                    )}
                                    {pub.year}.
                                    {pub.doi && (
                                        <> DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a>.</>
                                    )}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default PublicationsPage;
