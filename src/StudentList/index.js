import React, { useState } from 'react';
import './student.css';

import { HiPlus, HiMinusSm } from 'react-icons/hi'

const StudentsList = (props) => {
    const { id, pic, firstName, lastName, email, company, skill, grades } = props;
    const [expandButton, setExpandButton] = useState(false);
    // const [text, setText] = useState('');

    // const onChange = (e) => {
    //     setText(e);
    // }

    const handleExpandButton = () => {
        setExpandButton(!expandButton);
    };

    const avarageGrade = grades.map((i) => Number(i)).reduce((a, b) => a + b) / grades.length;

    const gradeList = [];
    for (const [index, value] of grades.entries()) {
        gradeList.push(
            <span key={index}>Test {index + 1}: {value}%</span>)
    };

    const tagList = [];
    for (const [index, value] of grades.entries()) {
        tagList.push(<span key={index}>{value}</span>)
    };

    return (
        <>
            <div key={id} className='profile-content'>
                <div className='profile-content-img'>
                    <img
                        src={pic}
                        alt=''
                    />
                </div>
                <div className='profile-content-info'>
                    <div className='profile-content-info-header'>
                        <div className='profile-content-title'>{firstName} {lastName}</div>
                        <div onClick={handleExpandButton}>{expandButton ? <i><HiMinusSm /></i> : <i><HiPlus /></i>}</div>
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

                        {/* I've tried several times to implement an input to save the data on profiles state and then render the inputed data here 
                        but I wasn't able to do it. So, I fetch data from grades array and then is rendering here with conditional ternay operator */}
                        {
                            !expandButton ? (
                                <div className='profile-list-search-new-tag'>
                                    {tagList}
                                </div>
                            ) : (
                                null
                            )
                        }

                        {/* <div className='profile-list-search-add-tag'>
                            <input
                                type='text'
                                value={text}
                                placeholder='Add a tag'
                                onChange={(e) => onChange(e.target.value)}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsList;
