import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCarousel from '../../components/imageCarousel';

const HomePage = () => {
    return(
        <div className="mt-4">
            <ImageCarousel />
            <Container className="mt-5 px-4 px-md-5">
                <p>
                    The Information Retrieval and Language Processing Lab (IRLP Lab) was established in the year 2010 with the aim of doing research in the area of information retrieval (IR) wherein we deal with retrieval of information from unstructured documents and natural language processing (NLP) wherein we deal with processing of Indic languages. The objective of IRLP Lab is to do research as well as deliver prototypes based on this research which can be used by the society.
                </p>
                <p>
                    In IRLP Lab we do research in the field of Cross Lingual Information Retrieval, financial text mining, legal AI, recommendation systems, biomedical IR, machine translation, summarizer, social media analytics. Till date the IRLP Lab has received total funds worth Rs. 3.3 crore for ongoing and completed projects.
                </p>
            </Container>
        </div>
    )
};

export default HomePage;
