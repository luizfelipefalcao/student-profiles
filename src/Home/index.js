import React, { useEffect, useState } from 'react';
import './home.css';

import StudentList from '../StudentList';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [searchTag, setSearchTag] = useState('');
    const [tag, setTag] = useState('');
    const [filteredSearchName, setFilteredSearchName] = useState([]);

    const fetchData = async () => {
        await fetch(`https://api.hatchways.io/assessment/students`)
            .then((res) => res.json())
            .then(({ students }) => setProfiles(students))
            .then(setLoading(false));
    };

    const handleTag = (e) => {
        setSearchTag(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredSearchName(
            profiles.filter((usersItem) =>
                usersItem.firstName.toLowerCase().includes(searchName.toLowerCase())
            )
        );
    }, [searchName, profiles]);

    return (
        <>
            {loading ? (
                <h2 style={{ fontWeight: 'bold' }}>Loading ...</h2>
            ) : (
                <div className='profile-list'>
                    <div className='profile-list-search-name'>
                        <input
                            type='text'
                            value={searchName}
                            placeholder='Search by name'
                            onChange={e => setSearchName(e.target.value)}
                        />
                    </div>
                    <div className='profile-list-search-tag'>
                        <input
                            type='text'
                            value={searchTag}
                            placeholder='Search by tag'
                            onChange={handleTag}
                        />
                    </div>
                    {
                        searchName === '' && searchTag === '' ? (
                            <>
                                {profiles.map((list, id) => (
                                    <StudentList key={id} {...list} />
                                ))}
                            </>
                        ) : searchName !== '' && searchTag === '' ? (
                            <>
                                {filteredSearchName.map((list, id) => (
                                    <StudentList key={id} {...list} />
                                ))}
                            </>
                        ) : searchName === '' || searchTag !== '' ? (
                            <>
                                <p>{tag}</p>
                            </>
                        ) : null
                    }
                </div>
            )}
        </>
    );
}

export default Home;

