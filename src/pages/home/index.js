import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from '../../components/imageCarousel';
import news from '../../data/news.json';
import events from '../../data/events.json';
import EventCard from '../../components/eventCard/small';

const HomePage = () => {
    const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

    const today = new Date();

    const formatDateRange = (startDate, endDate) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const start = new Date(startDate).toLocaleDateString('en-GB', options);
        const end = new Date(endDate).toLocaleDateString('en-GB', options);
        return `${start} to ${end}`;
    };

    const upcomingEvents = events?.events?.filter(event => new Date(event.start_date) > today) || [];

    return (
        <div className="mt-4" style={{ overflow: "hidden" }}>
            <Container fluid>
                <h1 className="text-center mb-4">Information Retrieval and Language Processing Lab</h1>
                <Row className="mt-5 ms-0 mx-md-5">
                    <Col md={7} className="p-0">
                        <ImageCarousel />
                    </Col>
                    <Col md={5}>
                        <div>
                            <p>
                                The Information Retrieval and Language Processing Lab (IRLP Lab) was established in the year 2010 with the aim of doing research in the area of information retrieval (IR) wherein we deal with retrieval of information from unstructured documents and natural language processing (NLP) wherein we deal with processing of Indic languages. The objective of IRLP Lab is to do research as well as deliver prototypes based on this research which can be used by the society.
                            </p>
                            <p>
                                In IRLP Lab we do research in the field of Cross Lingual Information Retrieval, financial text mining, legal AI, recommendation systems, biomedical IR, machine translation, summarizer, social media analytics. Till date the IRLP Lab has received total funds worth Rs. 3.3 crore for ongoing and completed projects.
                            </p>
                        </div>
                    </Col>
                </Row>
                
                {upcomingEvents.length > 0 && (
                    <Row className="mt-4 mx-3 mx-md-5">
                        <Col md={12}>
                            <h2 className="mt-3 mb-3"><strong>Upcoming Events</strong></h2>
                            <Row>
                                {upcomingEvents.map((event, index) => (
                                    <Col key={index} xs={12} md={6} className="mb-4">
                                        <EventCard
                                            event={{
                                                ...event,
                                                formattedDate: formatDateRange(event.start_date, event.end_date)
                                            }}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                )}
                
                <Row className="mt-4 mx-3 mx-md-5">
                    <Col xs={12} md={6}>
                        <h2 className='mt-3 mb-3'><strong>News</strong></h2>
                        <ul className="list-unstyled ms-5" style={{ listStyleType: 'square' }}>
                            {sortedNews.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <span className="text-muted"><strong>{item.date}:</strong></span> {item.headline}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className='mt-3 mb-3'><strong>Want to work with us?</strong></h2>
                        <p style={{ color: 'grey' }}>
                            To apply for the <strong>M.Tech. / PhD position</strong>, <a href="/">click here</a>.
                        </p>
                        <p style={{ color: 'grey' }}>
                            To apply for the <strong>Research Assistant (RA) / Post Doctoral position</strong>, drop a mail to <a href="mailto:irlab@daiict.ac.in">irlab@daiict.ac.in</a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
