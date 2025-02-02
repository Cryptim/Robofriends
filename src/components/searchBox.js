import React from 'react';
import './searchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='searchBox'>
      <input
        className='searchInput'
        type='search'
        placeholder='Search robots'
        onChange={searchChange} // Listen for input changes
      />
    </div>
  );
};

export default SearchBox;
