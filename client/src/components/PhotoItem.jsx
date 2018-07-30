import React from 'react';
import Arrow from './Carousel/Arrow.jsx';
import Close from './Carousel/Close.jsx';
import ImageSlide from './Carousel/ImageSlide.jsx';

const PhotoItem = (props) => {
  
  return (
      <div className={`item item-${props.index}`}>
        <div className='photo' >
          <img src={props.photo} data-target="popup" onClick={props.onImgClick} />
        </div>


        <div className="modal" id="popup" data-target="popup">
          <div className="modal-content">
            <Arrow direction="left" clickFunc={props.previousSlide} glyph="&#9664;" />
            <ImageSlide url={props.url} />
            <Arrow direction="right" clickFunc={props.nextSlide} glyph="&#9654;" />
            <Close clickFunc={props.onImgClick} glyph="&#x2717;"  />
          </div>
        </div>
      </div>

  );
};

export default PhotoItem;
