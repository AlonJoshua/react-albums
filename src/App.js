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
         <Route 
         exact={true}
         path='/' 
         render={() => (
         <div>
         <h1>My Albums</h1>
         <SearchBox searchChange={this.onSearchChange} />
         <AlbumList 
          albums={filteredAlbums} 
          photos={filteredPhotos}
          coverClick={this.onCoverClick}
          onRouteChange={this.onRouteChange}
          searchChange={this.onSearchChange}
         />
         </div>
           )}
         />
         <Route
         path='/albums/:albumId'
         render={() => (
         <div>
         <h1>My Photos</h1>
         <SearchBox searchChange={this.onSearchChange} />
         <PhotoList
         photos={filteredPhotos}
         albumId={this.stateCheck}
          />
         </div>
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