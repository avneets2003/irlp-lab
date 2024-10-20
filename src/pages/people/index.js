import React from 'react';
import UserCard from '../../components/userCard/index';
import data from '../../data/people.json';

const PeoplePage = () => {
    return(
        <div className="container mt-5">
            {data.map((category, index) => (
                <div key={index}>
                <h2 className='mt-4 mb-4'>{category.title}</h2>
                <div className="d-flex flex-wrap">
                    {category.people.map((person, idx) => (
                    <UserCard key={idx} name={person.name} image={person.image} />
                    ))}
                </div>
                </div>
            ))}
        </div>
    )
};

export default PeoplePage;
