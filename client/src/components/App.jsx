import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      photos: [],
      showComponent: false,
      currentIndex: 0,
    };
    this.onImgClick = this.onImgClick.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.onFlagClick = this.onFlagClick.bind(this);
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

  previousSlide() {
    if(this.state.currentIndex !== 0) {

      const lastIndex = this.state.photos.length - 1;
      const {currentIndex} = this.state;
      const shouldResetIndex = (currentIndex === 0);
      const index = shouldResetIndex ? lastIndex : currentIndex - 1;
  
      this.setState({
        currentIndex: index,
      });
    }
  }

  nextSlide() {
    if(this.state.currentIndex !== this.state.photos.length - 1) {
      const lastIndex = this.state.photos.length - 1;
      const {currentIndex} = this.state;
      const shouldResetIndex = (currentIndex === lastIndex);
      const index = shouldResetIndex ? 0 : currentIndex + 1;
  
      this.setState({
        currentIndex: index
      });
    }
  }

  onImgClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    if (target) {
      const modal = document.getElementById(target);
      console.log('modal', modal);

      modal.classList.toggle('modal-opacity');
      setTimeout( (modal) => {
        modal.classList.toggle('modal-on');
      }, 400, modal );
      document.body.classList.toggle('carousel-overflow-hidden');
    }
  }

  onFlagClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    if (target) {
      const modal = document.getElementById(target);
      console.log('modal', modal);

      modal.classList.toggle('modal-opacity');
      setTimeout( (modal) => {
        modal.classList.toggle('modal-on');
      }, 400, modal );
      document.body.classList.toggle('problem-overflow-hidden');
    }
  }

  render() {
    return (
      <div className="photos-gallery">
        <h2 className="photos-gallery-header"> 
          {this.state.photos.length} Photos 
          <a href="" className="photos-gallery-header-subtext" data-target="popup" onClick={this.onImgClick}> View more </a>
        </h2>
        <PhotoList photos={this.state.photos} previousSlide={this.previousSlide} url={this.state.photos[this.state.currentIndex]} nextSlide={this.nextSlide} onImgClick={this.onImgClick} onFlagClick={this.onFlagClick} />
      </div>
    )
  }
}

export default App;