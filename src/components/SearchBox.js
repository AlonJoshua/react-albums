import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
	 <div className='search-box' align='center'>
	  <input type='search' onChange={searchChange}  />
	 </div>
		);
}

export default SearchBox;