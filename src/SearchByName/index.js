import React, { useState } from 'react';

const SearchByName = ({ handleSearchName }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    handleSearchName(q)
  }

  return (
    <div className='profile-list-search-name'>
      <input
        type='text'
        placeholder='Search by name'
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchByName;