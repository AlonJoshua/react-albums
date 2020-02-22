import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
	 <div className='search-box' align='center'>
	  <input type='search' onChange={searchChange} placeholder='Search' />
	 </div>
		);
}

export default SearchBox;