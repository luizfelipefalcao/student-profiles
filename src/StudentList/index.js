import React, { useState } from 'react';
import './student.css';

import { HiPlus, HiMinusSm } from 'react-icons/hi'

const ProfileList = (props) => {
    const { id, pic, firstName, lastName, email, company, skill, grades, tag } = props;
    const [expandButton, setExpandButton] = useState(false);
    // const [hidedButton, setHideButton] = useState(false);

    const handleAddTag = () => {
        console.log('funciona!!');
    }

    const handleExpandButton = () => {
        setExpandButton(true);
    };

    const handleHideButton = () => {
        setExpandButton(false);
    }

    const avarageGrade = grades.map((i) => Number(i)).reduce((a, b) => a + b) / grades.length;

    const gradeList = [];
    for (const [index, value] of grades.entries()) {
        gradeList.push(<span key={index}>Test {index + 1}: {value}%</span>)
    };

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
                        <div>{expandButton ? <i onClick={handleHideButton}><HiMinusSm /></i> : <i onClick={handleExpandButton}><HiPlus /></i>}</div>
                    </div>
                    <div className='profile-content-data'>
                        <span>Email: {email}</span><br />
                        <span>Company: {company}</span><br />
                        <span>Skill: {skill}</span><br />
                        <span>Avarage: {avarageGrade.toFixed(3)}</span>
                        {
                            expandButton ? (
                                <div className='profile-content-grades'>
                                    <div className='profile-content-grades-item'>
                                        {gradeList}
                                    </div>
                                </div>
                            ) : (
                                null
                            )
                        }
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
