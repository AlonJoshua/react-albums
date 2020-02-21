import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, photos }) => {
  return(
	<div>
			{
			  albums.map((album, i) => {
				 	return (<Album
						key={i}
						id={albums[i].id}
						title={albums[i].title}
						photos={photos}
					/>
					);
				})
			}
	</div>
		);
}

export default AlbumList;