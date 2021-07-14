import React, { useEffect, useState } from 'react';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        await fetch(`https://api.hatchways.io/assessment/students`)
            .then((res) => res.json())
            .then(({students}) => setProfiles(students))
            .then(setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
        console.log(profiles);
    }, [profiles]);

    return (
        <div>
            {profiles.map((list) => (
                <ul key={list.id}>
                    <li><img src={list.pic}/></li>
                    <li>Fullname: {' '} {list.firstName} {list.lastName}</li>
                    <li>City: {' '} {list.city}</li>
                    <li>Company: {' '} {list.company}</li>
                    <li>Email: {' '} {list.email}</li>
                    <li>Grades {' '} {list.grades.map(item => <p>{item}</p>)}</li>
                </ul>
            ))}
        </div>
    );
}

export default Home;