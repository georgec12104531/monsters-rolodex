import React from 'react';
import './search-filter.styles.css'

const SearchFilter = ({ placeholder, handleChange }) => {
  return(
    <input
      className='search' 
      onChange={ handleChange } 
      type='search'
      placeholder={ placeholder }/>
  )
}

export default SearchFilter;