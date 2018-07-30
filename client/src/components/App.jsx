import React from 'react';
import axios from 'axios';

import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      photos: [
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food22.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food23.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food24.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food25.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food26.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food27.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food28.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food29.jpg",
        "https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food30.jpg"
      ]
    }
  }

  // componentDidMount() {
  //   this.getRestaurantPhotos();
  // }

  // getRestaurantPhotos() {

  //   let restaurantId = Math.floor(Math.random() * 100);
  //   //`/${restaurantId}/photos`

  //   axios.get('/restaurantId/photos')
  //   .then(results => this.setState({photos: results.data}))
  //   .catch(err => console.log('ERROR', err));
  // }

  render() {
    return (
      <div className="photos-gallery">
        <h2 className="photos-gallery-header"> 3 Photos </h2>
        <PhotoList photos={this.state.photos} />
      </div>
    )
  }
}

export default App;