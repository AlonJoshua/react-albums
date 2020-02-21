import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PhotoList from './PhotoList';

const Album = ({ id, title, photos, PhotoList }) => {
	const findthumbnail = photos.find(photo => photo.albumId === id);
	console.log(findthumbnail);
	return (
	 <div className='polaroid'>
	 <Link to={`/albums/${id}`}>
	  	<img 
	 	 alt='thumbnail' 
	 	 src={'https://via.placeholder.com/600/92c952'}
	 	/>
	  </Link>
	  <div className='container'>
	   	<h2>{title}</h2>
	  </div>
	 </div>
		);
}

export default Album;
