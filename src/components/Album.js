import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ id, title, photos}) => {
	const findthumbnail = photos.find(photo => photo.albumId === id);
	if (!findthumbnail) {
		return (
			<div></div>
	)
	} return (
	 <div className='polaroid'>
	 <Link to={`/albums/${id}`}>
	  	<img 
	 	 alt='thumbnail' 
	 	 src={findthumbnail.url}
	 	/>
	  </Link>
	  <div className='container'>
	   	<h2>{title}</h2>
	  </div>
	 </div>
		);
}

export default Album;
