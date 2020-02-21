import React from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoList = ({ photos }) => {
	let { albumId } = useParams();
	albumId = parseInt(albumId);
	const filteredPhotosArray = photos.filter(photo => photo.albumId === albumId);
	console.log(filteredPhotosArray, photos, albumId);
  return(
	<div>
			{ 
				 	filteredPhotosArray.map((photo, i) => {
				 		return (<Photo
						key={i}
						PhotoId={photos[i].id}
						title={photos[i].title}
						url={photos[i].url}
						thumbnailUrl={photos[i].thumbnailUrl}
					/>
					);
				 	})
				}
	</div>
		);
}

export default PhotoList;