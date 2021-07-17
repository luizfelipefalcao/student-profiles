import React, { useState } from 'react';
import './student.css';

import { HiPlus, HiMinusSm } from 'react-icons/hi'

const ProfileList = (props) => {
    const { id, pic, firstName, lastName, email, company, skill, tag } = props;
    const [gradesButton, setGradesButton] = useState('expanded');

    return (
        <>
            <div key={id} className='profile-content'>
                <div className='profile-content-img'>
                    <img
                        src={pic}
                        alt={pic}
                    />
                </div>
                <div className='profile-content-info'>
                    <div className='profile-content-info-header'>
                        <div className='profile-content-title'>{firstName} {lastName}</div>
                        <div>{gradesButton === 'expanded' ? <i><HiMinusSm /></i> : <i><HiPlus /></i>}</div>
                    </div>
                    <div className='profile-content-data'>
                        <span>Email: {email}</span><br />
                        <span>Company: {company}</span><br />
                        <span>Skill: {skill}</span><br />
                        <span>Avarage: 88.875%</span>
                        <div className='profile-content-data-grades'>
                            <span>Test 1:</span>
                            <span>78%</span>
                        </div>
                        <div className='profile-list-search-new-tag'>
                            {/* {tag.map(item => <span>{item}</span>)} */}
                            <span>tag1</span>
                            <span>tag2</span>
                        </div>
                        <div className='profile-list-search-add-tag'>
                            <input
                                type='text'
                                value={tag}
                                placeholder='Add a tag'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileList;
