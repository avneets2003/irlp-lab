import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from '../../components/imageCarousel';
import news from '../../data/news.json';
import events from '../../data/events.json';
import EventCard from '../../components/eventCard/small';

const HomePage = () => {
    const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
    const upcomingEvents = events.events.upcoming;

    return (
        <div className="mt-4" style={{overflow: "hidden"}}>
            <Container fluid>
                <h1 className="text-center mb-4">Information Retrieval and Language Processing (IRLP) Lab</h1>
                <Row className="mt-5">
                    <Col md={6} className="px-4 px-md-5">
                        <div className="ms-4">
                            <p>
                                The Information Retrieval and Language Processing Lab (IRLP Lab) was established in the year 2010 with the aim of doing research in the area of information retrieval (IR) wherein we deal with retrieval of information from unstructured documents and natural language processing (NLP) wherein we deal with processing of Indic languages. The objective of IRLP Lab is to do research as well as deliver prototypes based on this research which can be used by the society.
                            </p>
                            <p>
                                In IRLP Lab we do research in the field of Cross Lingual Information Retrieval, financial text mining, legal AI, recommendation systems, biomedical IR, machine translation, summarizer, social media analytics. Till date the IRLP Lab has received total funds worth Rs. 3.3 crore for ongoing and completed projects.
                            </p>
                            <p style={{ color: 'grey' }}>
                                <strong>Want to work with us?</strong>
                            </p>
                            <p style={{ color: 'grey' }}>
                                To apply for the <strong>M.Tech. / PhD position</strong>, <a href="/">click here</a>.
                            </p>
                            <p style={{ color: 'grey' }}>
                                To apply for the <strong>Research Assistant (RA) / Post Doctoral position</strong>, drop a mail to <a href="mailto:irlab@daiict.ac.in">irlab@daiict.ac.in</a>.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="p-0">
                        <ImageCarousel />
                    </Col>
                </Row>

                {/* Upcoming Events Row */}
                <Row className="mt-4">
                    <Col md={12} className="px-4 px-md-5 ms-4">
                        <h2 className='mt-3 mb-3'><strong>Upcoming Events</strong></h2>
                        <Row>
                            {upcomingEvents.map((event, index) => (
                                <Col key={index} md={6} className="mb-4"> {/* Adjust column size as needed */}
                                    <EventCard event={event} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* News Section */}
                <Row className="mt-4">
                    <Col md={12} className="px-4 px-md-5 ms-4">
                        <h2 className='mt-3 mb-3'><strong>News</strong></h2>
                        <ul className="list-unstyled ms-5" style={{ listStyleType: 'square' }}>
                            {sortedNews.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <span className="text-muted"><strong>{item.date}:</strong></span> {item.headline}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
