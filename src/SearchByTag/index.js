import React, { useState } from 'react';

const SearchByTag = ({ handleSearchTag }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        handleSearchTag(q)
    }

    return (
        <div className='profile-list-search-tag'>
            <input
                type='text'
                placeholder='Search by tag'
                value={text}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default SearchByTag;