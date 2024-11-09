import React from 'react';
import { Container } from 'react-bootstrap';
import news from '../../data/news.json';

const MediaCoveragePage = () => {
  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

  return (
    <Container className="mt-5">
      <div>
          <h2>IRLP Lab in News</h2>
          <ul>
              {sortedNews.map((item, index) => (
                  <li key={index}>
                    <span style={{ color: 'grey', fontWeight: 'bold' }}>{item.date}</span>: {item.headline}
                  </li>
              ))}
          </ul>
      </div>
    </Container>
  );
}

export default MediaCoveragePage;