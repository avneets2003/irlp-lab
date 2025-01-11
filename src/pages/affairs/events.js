import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from '../../components/eventCard/large';
import eventsData from '../../data/events.json';

const EventsPage = () => {
    const today = new Date();

    const formatDateRange = (startDate, endDate) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const start = new Date(startDate).toLocaleDateString('en-GB', options);
        const end = new Date(endDate).toLocaleDateString('en-GB', options);
        return `${start} to ${end}`;
    };

    const upcomingEvents = eventsData.events.filter(event => new Date(event.start_date) > today);

    return (
        <Container className="mt-5">
            {upcomingEvents.length > 0 && (
                <>
                    <h1 className="mb-4">Upcoming Events</h1>
                    <Row className="mx-3">
                        {upcomingEvents.map((event, index) => (
                            <Col key={index} md={12}>
                                <EventCard
                                    event={{
                                        ...event,
                                        formattedDate: formatDateRange(event.start_date, event.end_date),
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            )}

            <h1 className="mt-5 mb-4">Past Events</h1>
            <Row className="mx-3">
                {eventsData.events.map((event, index) => (
                    <Col key={index} md={12}>
                        <EventCard
                            event={{
                                ...event,
                                formattedDate: formatDateRange(event.start_date, event.end_date),
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default EventsPage;
