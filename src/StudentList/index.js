import React, { useState } from 'react';
import './student.css';

import { HiPlus, HiMinusSm } from 'react-icons/hi'

const ProfileList = (props) => {
    const { id, pic, firstName, lastName, email, company, skill, tag } = props;
    const [gradesButton, setGradesButton] = useState(true);

    const handleAddTag = () => {
        console.log('funciona!!');
    }

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
                        <div>{gradesButton ? <i><HiMinusSm /></i> : <i><HiPlus /></i>}</div>
                    </div>
                    <div className='profile-content-data'>
                        <span>Email: {email}</span><br />
                        <span>Company: {company}</span><br />
                        <span>Skill: {skill}</span><br />
                        <span>Avarage: 88.875%</span>
                        <div className='profile-content-grades'>
                            <div className='profile-content-grades-item'>
                                <span>Test 1:</span>
                                <span>78%</span>
                            </div>
                            <div className='profile-content-grades-item'>
                                <span>Test 2:</span>
                                <span>98%</span>
                            </div>
                            <div className='profile-content-grades-item'>
                                <span>Test 3:</span>
                                <span>67%</span>
                            </div>
                        </div>
                        <div className='profile-list-search-new-tag'>
                            <span>tag1</span>
                            <span>tag2</span>
                        </div>
                        <div className='profile-list-search-add-tag'>
                            <input
                                type='text'
                                value={tag}
                                placeholder='Add a tag'
                                onChange={handleAddTag}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileList;
