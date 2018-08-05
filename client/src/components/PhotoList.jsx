import React from 'react';
import PhotoItem from './PhotoItem';
import styles from './PhotoList.css';


const PhotoList = (props) => {
  const grid = [];
  for (let i = 0; i < 9; i += 1) {
    grid.push(props.photos[i]);
  }

  return (
    <div className="photos-gallery-content">
      <div className="photos-gallery-morePhotos" href="" data-id="8" data-target="popup" onClick={props.onImgClick}>
        + {props.photos.length - 9} more
      </div>
      {grid.map((photo, index) =>
        <PhotoItem key={index} index={index} photo={photo} previousSlide={props.previousSlide} url={props.url} nextSlide={props.nextSlide} onImgClick={props.onImgClick} onFlagClick={props.onFlagClick} />)}
    </div>
  );
};

export default PhotoList;
