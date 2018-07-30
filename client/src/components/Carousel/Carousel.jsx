import React from 'react';
import axios from 'axios';

import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      photos: []
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
  	const lastIndex = imgUrls.length - 1;
  	const {currentIndex} = this.state;
  	const shouldResetIndex = (currentIndex === 0);
  	const index = shouldResetIndex ? lastIndex : currentIndex - 1;

  	this.setState({
  	  currentIndex: index,
  	});
  }

  nextSlide() {
  	console.log('clicked');
  	const lastIndex = imgUrls.length - 1;
  	const {currentIndex} = this.state;
  	const shouldResetIndex = (currentIndex === lastIndex);
  	const index = shouldResetIndex ? 0 : currentIndex + 1;

  	this.setState({
  	  currentIndex: index
  	});
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
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
        <ImageSlide url={this.state.photos[this.state.currentIndex]} />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
      </div>
    );
  }
}
export default Carousel;