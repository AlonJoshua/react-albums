import React from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const { id } = useParams;

const PhotoList = ({ photos, id }) => {
	const filteredPhotosArray = photos.filter(photo => photo.albumId === id);
	// let photoArray = photos.find(photo => photo.id === albums.id)
	// let albumsArray = albums.map((album, i) => {
	// 	let photoArray = photos.find(photo => photo.id === album.id)
		// if (photoArray.photos) {
		// 	albums.url = photoArray.url;
		// }
	// 	return albums;
	//     })
	// console.log(albumsArray);
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