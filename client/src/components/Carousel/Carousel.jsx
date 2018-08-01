// import React from 'react';
// import axios from 'axios';

// import ImageSlide from './ImageSlide';
// import Arrow from './Arrow';
// import Close from './Close';

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentIndex: 0,
//       photos: [],
//     };

//     this.previousSlide = this.previousSlide.bind(this);
//     this.nextSlide = this.nextSlide.bind(this);
//   }

//   previousSlide() {
//     if(this.state.currentIndex !== 0) {

//       const lastIndex = this.state.photos.length - 1;
//       const {currentIndex} = this.state;
//       const shouldResetIndex = (currentIndex === 0);
//       const index = shouldResetIndex ? lastIndex : currentIndex - 1;
//       this.setState({
//         currentIndex: index,
//       });
//     }
//   }

//   nextSlide() {
//     if(this.state.currentIndex !== this.state.photos.length - 1) {

//     const lastIndex = this.state.photos.length - 1;
//     const {currentIndex} = this.state;
//     const shouldResetIndex = (currentIndex === lastIndex);
//     const index = shouldResetIndex ? 0 : currentIndex + 1;
//     this.setState({
//       currentIndex: index
//     });
//     }
//   }

//   componentDidMount() {
//     this.getRestaurantPhotos();
//   }

//   getRestaurantPhotos() {
//     const restaurantId = Math.floor(Math.random() * 100);

//     axios.get('/restaurantId/photos')
//       .then(results => this.setState({ photos: results.data }))
//       .catch(err => console.log('ERROR', err));
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <Arrow direction="left" clickFunc={this.previousSlide} glyph="&#9664;" />
//         <ImageSlide url={this.state.photos[this.state.currentIndex]} />
//         <Arrow direction="right" clickFunc={this.nextSlide} glyph="&#9654;" />
//         <Close clickFunc={this.closeCarousel} glyph="&#x2717;" />
//       </div>
//     );
//   }
// }
// export default Carousel;
