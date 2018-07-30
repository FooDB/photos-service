import React from 'react';
import PhotoItem from './PhotoItem.jsx';

const PhotoList = (props) => {

  let grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(props.photos[i]);
  }

  return (
    <div className="photos-gallery-content">
      {grid.map((photo, index) => 
        <PhotoItem key={index} index={index} photo={photo} previousSlide={props.previousSlide} url={props.url} nextSlide={props.nextSlide} onImgClick={props.onImgClick} />
      )}
    </div>
  );
}

export default PhotoList;
