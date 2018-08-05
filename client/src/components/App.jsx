import React from 'react';
import axios from 'axios';

import PhotoList from './PhotoList';
import styles from './App.css';

const getIDFromURL = () => window.location.pathname.split('/')[2];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      currentIndex: 0,
    };
    this.onImgClick = this.onImgClick.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.onFlagClick = this.onFlagClick.bind(this);
  }

  componentDidMount() {
    const restaurantId = getIDFromURL();
    this.getRestaurantPhotos(restaurantId);
  }


  onImgClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    if (target) {
      const index = (event.target.getAttribute('data-id'));
      this.setState({ currentIndex: index });
      const modal = document.getElementById(target);
      modal.classList.toggle('modal-opacity');
      setTimeout((modal) => {
        modal.classList.toggle('modal-on');
      }, 400, modal);
      document.body.classList.toggle('carousel-overflow-hidden');
    }
  }

  onFlagClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    if (target) {
      const modal = document.getElementById(target);
      modal.classList.toggle('modal-opacity');
      setTimeout((modal) => {
        modal.classList.toggle('modal-on');
      }, 400, modal);
      document.body.classList.toggle('problem-overflow-hidden');
    }
  }

  getRestaurantPhotos(restaurantId) {
    axios.get(`http://ec2-34-201-243-233.compute-1.amazonaws.com/restaurant/photos/${restaurantId}`)
      .then(results => this.setState({ photos: results.data }))
      .catch(err => console.log('ERROR', err));
  }

  previousSlide() {
    if (this.state.currentIndex !== 0) {
      const lastIndex = this.state.photos.length - 1;
      const { currentIndex } = this.state;
      const shouldResetIndex = (currentIndex === 0);
      const index = shouldResetIndex ? 0 : parseInt(currentIndex) - 1;
      this.setState({
        currentIndex: index,
      });
    }
  }

  nextSlide() {
    const lastIndex = this.state.photos.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = (currentIndex === lastIndex);
    const index = shouldResetIndex ? lastIndex : (parseInt(currentIndex) + 1);
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    return (
      <div className="photos-gallery">
        <h2 className="photos-gallery-header">
          { this.state.photos.length }&nbsp;Photos
          <a href="" className="photos-gallery-header-subtext" data-id="8" data-target="popup" onClick={this.onImgClick}>
            View more
          </a>
        </h2>
        <PhotoList photos={this.state.photos} previousSlide={this.previousSlide} url={this.state.photos[this.state.currentIndex]} nextSlide={this.nextSlide} onImgClick={this.onImgClick} onFlagClick={this.onFlagClick} />
      </div>
    );
  }
}

export default App;
