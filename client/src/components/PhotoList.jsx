import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoList = (props) => {
  const grid = [];
  for (let i = 0; i < 9; i += 1) {
    grid.push(props.photos[i]);
  }

  return (
    <div className="photos-gallery-content">
      {grid.map((photo, index) =>
        <PhotoItem key={index} index={index} photo={photo} previousSlide={props.previousSlide} url={props.url} nextSlide={props.nextSlide} onImgClick={props.onImgClick} onFlagClick={props.onFlagClick} />)}
    </div>
  );
};

export default PhotoList;
