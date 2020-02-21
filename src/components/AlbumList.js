import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, photos, coverClick }) => {
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
			  albums.map((album, i) => {
				 	return (<Album
						key={i}
						id={albums[i].id}
						title={albums[i].title}
						photos={photos}
						coverClick={coverClick}
					/>
					);
				})
			}
	</div>
		);
}

export default AlbumList;