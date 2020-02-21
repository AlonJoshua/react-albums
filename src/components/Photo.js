import React from 'react';


const Photo = ({ PhotoId, title, url, thumbnailUrl }) => {

	return (
	<div className='polaroid'>
      <a href={url} target='_blank' rel="noopener noreferrer">
	   <img 
	   alt='thumbnail' 
	   // onClick={(url) => {window.open(url)}}
	   src={thumbnailUrl}
	   />
	  </a>
	  <div className='container'>
	   	<h2>{title}</h2>
	  </div>
	 </div>
		);
}

export default Photo;
