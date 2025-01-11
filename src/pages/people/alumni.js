import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import data from '../../data/people.json';

const AlumniPage = () => {
  return (
    <div className="container mt-5">
      {data
        .filter(category => category.title === 'Alumni (Ph.D.)' || category.title === 'Alumni (M.Tech.)')
        .map((category, index) => (
          <div key={index}>
            <h2 className="mt-4 mb-4">{category.title}</h2>
            <Row className='mx-3 mx-md-0'>
              {category.title === 'Alumni (M.Tech.)' ? (
                category.people.map((person, idx) => (
                  <Col key={idx} xs={12} md={4} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                category.people.map((person, idx) => (
                  <Col key={idx} xs={12} md={4} lg={3} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={person.image} />
                      <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </div>
        ))}
    </div>
  );
};

export default AlumniPage;
