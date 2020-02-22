import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ id, title, photos}) => {
	const findthumbnail = photos.find(photo => photo.albumId === id);
	if (!findthumbnail) {
		return (
			<div></div>
	)
	} return (
	 <div className='polaroid grow'>
	 <Link to={`/albums/${id}`}>
	  	<img 
	  	 width='70%'
	 	 alt='thumbnail' 
	 	 src={findthumbnail.url}
	 	/>
	  </Link>
	  <div className='container-3'>
	   	<h4>{title}</h4>
	  </div>
	 </div>
		);
}

export default Album;
