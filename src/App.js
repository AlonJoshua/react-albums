import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { albums, photos, searchfield } = this.state;
		const filteredAlbums = albums.filter(albums => {
			return albums.title.toLowerCase().includes(searchfield.toLowerCase());
		})
		const filteredPhotos = photos.filter(photos => {
			return photos.title.toLowerCase().includes(searchfield.toLowerCase());
		})

     return (
      <div>
        { !albums.length
          ? (
            <h1>Loading</h1>
          ) : (
          <Router>
        <h1>My Albums</h1>
        <SearchBox searchChange={this.onSearchChange} />
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