import React from 'react'
const SearchFilter = ({filterText,handleFilterTextChange}) => {
    return ( 
      <div>
    filter countries:<input value={filterText} onChange={handleFilterTextChange}/>
      </div>
    )
  };

export default SearchFilter;