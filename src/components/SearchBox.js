import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
	 <div className='search-box' align='center'>
	  <input className='search' type='search' onChange={searchChange} placeholder='Search' />
	 </div>
		);
}

export default SearchBox;