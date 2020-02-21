import React from 'react';
import Photo from './Photo';

const PhotoList = ({ photos, stateCheck }) => {
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
			  photos.map((photo, i) => {
			  	// filter photos to match album id
				 	return (<Photo
						key={i}
						id={photos[i].id}
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