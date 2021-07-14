import React from 'react';
import './profile.css';

const ProfileList = (props) => {
    const { id, pic, firstName, lastName, email, company, skill } = props;

    return (
        <div key={id} className='profile-content'>
            <div className='profile-content-img'>
                <img
                    src={pic}
                    alt={pic}
                />
            </div>
            <div className='profile-content-info'>
                <div className='profile-content-title'>{firstName} {lastName}</div>
                <div className='profile-content-data'>
                    <span>Email: {email}</span><br />
                    <span>Company: {company}</span><br />
                    <span>Skill: {skill}</span><br />
                    <span>Avarage: 88.875%</span>
                </div>
            </div>
        </div>

    )
}

export default ProfileList;