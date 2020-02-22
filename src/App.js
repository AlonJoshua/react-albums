import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
            <div className='loading'>
              <h1>Loading...</h1>
            <div className="spinner-border text-primary" role="status">
             <span className="sr-only">Loading...</span>
            </div>
            </div>
          ) : (
          <Router>
         <Route 
         exact={true}
         path='/react-albums/' 
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
         <div className='btn-div'>
         <Link to='/react-albums/'>
         <button className='btn'>Back to Albums</button>
         </Link>
         </div>
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