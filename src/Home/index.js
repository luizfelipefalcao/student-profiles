import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [searchTag, setSearchTag] = useState('');

    const fetchData = async () => {
        await fetch(`https://api.hatchways.io/assessment/students`)
            .then((res) => res.json())
            .then(({ students }) => setProfiles(students))
            .then(setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

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
                            onChange={e => setSearchTag(e.target.value)}
                        />
                    </div>
                    {profiles.map((item) => (
                        <div key={item.id} className='profile-content'>
                            <div className='profile-content-img'>
                                <img
                                    src={item.pic}
                                    alt={item.pic}
                                />
                            </div>
                            <div className='profile-content-info'>
                                <div className='profile-content-title'>{item.frstName} {item.lastName}</div>
                                <div className='profile-content-data'>
                                    <span>Email: {item.email}</span><br />
                                    <span>Company: {item.company}</span><br />
                                    <span>Skill: {item.skill}</span><br />
                                    <span>Avarage: 88.875%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Home;