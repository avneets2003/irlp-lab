import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from '../../components/eventCard/index';
import eventsData from '../../data/events.json';

const EventsPage = () => {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Upcoming Events</h1>
            <Row>
                {eventsData.events.upcoming.map((event, index) => (
                    <Col key={index} md={12}>
                        <EventCard event={event} />
                    </Col>
                ))}
            </Row>
            <h1 className="mt-5 mb-4">Past Events</h1>
            <Row>
                {eventsData.events.past.map((event, index) => (
                    <Col key={index} md={12}>
                        <EventCard event={event} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default EventsPage;
