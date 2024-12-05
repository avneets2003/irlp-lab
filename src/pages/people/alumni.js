import React from 'react';
import UserCard from '../../components/userCard/index';
import data from '../../data/people.json';

const AlumniPage = () => {
  return (
    <div className="container mt-5">
      {data
        .filter(category => category.title === 'Alumni (Ph.D.)' || category.title === 'Alumni (M.Tech.)')
        .map((category, index) => (
          <div key={index}>
            <h2 className="mt-4 mb-4">{category.title}</h2>
            <div className="d-flex flex-wrap">
              {category.people.map((person, idx) => (
                <UserCard key={idx} name={person.name} image={person.image} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlumniPage;
