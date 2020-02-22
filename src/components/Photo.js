import React from 'react';


const Photo = ({ PhotoId, title, url, thumbnailUrl }) => {

	return (
	<div className='polaroid grow'>
      <a href={url} target='_blank' rel="noopener noreferrer">
	   <img 
	   width='90%'
	   alt='thumbnail' 
	   src={thumbnailUrl}
	   />
	  </a>
	  <div className='container-3'>
	   	<h4>{title}</h4>
	  </div>
	 </div>
		);
}

export default Photo;
