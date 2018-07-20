import React from 'react';
import axios from 'axios';

import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.getRestaurantPhotos();
  }

  getRestaurantPhotos() {

    let restaurantId = Math.floor(Math.random() * 100);
    //`/${restaurantId}/photos`

    axios.get('/restaurantId/photos')
    .then(results => this.setState({photos: results.data}))
    .catch(err => console.log('ERROR', err));
  }

  render() {
    return (
      <div>
        <PhotoList list = {this.state.photos} />
      </div>
    )
  }
}

export default App;