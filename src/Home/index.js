import React, { useEffect, useState } from 'react';
import './home.css';

import StudentList from '../StudentList';
import SearchByName from '../SearchByName';
import SearchByTag from '../SearchByTag';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [searchTag, setSearchTag] = useState('');
    const [filteredByTag, setFilteredByTag] = useState([]);
    const [filteredSearchName, setFilteredSearchName] = useState([]);

    const fetchData = async () => {
        await fetch(`https://api.hatchways.io/assessment/students`)
            .then((res) => res.json())
            .then(({ students }) => setProfiles(students))
            .then(setLoading(false))
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredSearchName(
            profiles.filter((profileItem) =>
                profileItem.firstName.toLowerCase().includes(searchName.toLowerCase())
            )
        );
    }, [searchName, profiles]);

    useEffect(() => {
        setFilteredByTag(
            profiles.filter((tagItem) =>
                tagItem.grades.includes(searchTag))
        );
    }, [searchTag, profiles]);

    return (
        <>
            {loading ? (
                <h2 style={{ fontWeight: 'bold' }}>Loading ...</h2>
            ) : (
                <div className='profile-list'>
                    <SearchByName handleSearchName={(q) => setSearchName(q)} />
                    <SearchByTag handleSearchTag={(q) => setSearchTag(q)} />
                    {
                        searchName === '' && searchTag === '' ? (
                            <>
                                {profiles.map((list, id) => (
                                    <StudentList key={id} {...list}/>
                                ))}
                            </>
                        ) : searchName !== '' || searchTag === '' ? (
                            <>
                                {filteredSearchName.map((list, id) => (
                                    <StudentList key={id} {...list} />
                                ))}
                            </>
                        ) : searchName === '' || searchTag !== '' ? (
                            <>
                                {filteredByTag.map((list, id) => (
                                    <StudentList key={id} {...list} />
                                ))}
                            </>
                        ) : null
                    }
                </div>
            )}
        </>
    );
}

export default Home;

