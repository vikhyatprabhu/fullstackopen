import React from 'react'
const SearchFilter = ({filterText,handleFilterTextChange}) => {
    return ( 
      <div>
      <p>rfilter shown with </p>
      <input value={filterText} onChange={handleFilterTextChange}/>
      </div>
    )
  };

export default SearchFilter;