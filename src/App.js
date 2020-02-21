import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			albums: [],
			photos: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => this.setState({ albums : albums }))

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => this.setState({ photos : photos }))

        // for(const album of this.state.albums) {
        // 	for(const photo of this.state.photos) {
        // 		if (photo.id === album.id) {
        // 			this.setState(album.url = photo.url)
        // 			break;
        // 		}
        // 	}
        // }
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

  	stateCheck = (click) => {
     const albumId = this.state.albums.map((album, i) => {

        return this.state.albums[i].id
      })
  		// console.log(albumId);
  	}

  	onCoverClick = (event) => {
  		this.setState({ onMainPage: false });
  	}


	render() {
		const { albums, photos, searchfield, onMainPage } = this.state;
		const filteredAlbums = albums.filter(albums => {
			return albums.title.toLowerCase().includes(searchfield.toLowerCase());
		})
		const filteredPhotos = photos.filter(photos => {
			return photos.title.toLowerCase().includes(searchfield.toLowerCase());
		})

     return (
      <div>
        { albums.length === 0
          ? (
            <h1>Loading</h1>
          ) : (
          <Router>
        <h1>My Albums</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <button 
        onClick={this.stateCheck}
        className='btn'
        >
        state check
        </button>
         <Route 
         exact={true}
         path='/' 
         render={() => (
         <AlbumList 
          albums={filteredAlbums} 
          photos={filteredPhotos}
          coverClick={this.onCoverClick}
          onRouteChange={this.onRouteChange}
         />
           )}
         />
         <Route
         path='/albums/:albumId'
         render={() => (
         <PhotoList
         photos={filteredPhotos}
         albumId={this.stateCheck}
          />
          )}
         />
        </Router>
          )
        }
      </div>

			)
	}
}

export default App;