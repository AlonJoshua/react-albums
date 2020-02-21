import React from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoList = ({ photos }) => {
	let { albumId } = useParams();
	albumId = parseInt(albumId);
	const filteredPhotosArray = photos.filter(photo => photo.albumId === albumId);
  return(
	<div>
			{ 
				 	filteredPhotosArray.map((photo, i) => {
				 		return (<Photo
						key={i}
						PhotoId={photo.id}
						title={photo.title}
						url={photo.url}
						thumbnailUrl={photo.thumbnailUrl}
					/>
					);
				 	})
				}
	</div>
		);
}

export default PhotoList;