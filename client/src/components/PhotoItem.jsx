import React from 'react';
import Arrow from './Carousel/Arrow';
import Close from './Carousel/Close';
import ImageSlide from './Carousel/ImageSlide';
import Flag from './Carousel/Flag';

const PhotoItem = (props) => {
  return (
    <div className={`item item-${props.index}`}>
      <div className="photo">
        <img src={props.photo} data-id={props.index} data-target="popup" alt="" onClick={props.onImgClick} />
      </div>
      <div className="modal" id="popup" data-target="popup">
        <div className="modal-content">
          <Arrow direction="left" clickFunc={props.previousSlide} glyph="&#9664;" />
          <ImageSlide url={props.url} />
          <Arrow direction="right" clickFunc={props.nextSlide} glyph="&#9654;" />
          <Close clickFunc={props.onImgClick} glyph="&#9747;" />
          <Flag clickFunc={props.onFlagClick} glyph="&#9872;" />
        </div>
      </div>
      <div className="problem-modal" id="problem-popup" data-target="problem-popup">
        <div className="problem-modal-content">
          <h2>
            Report a photo problem
          </h2>
          <button className="btn-photos-report" id="btn-photos-unrelated" type="submit" data-target="problem-popup" onClick={props.onFlagClick}>
            Unrelated to restaurant
          </button>
          <button className="btn-photos-report" id="btn-photos-inappropriate" type="submit" data-target="problem-popup" onClick={props.onFlagClick}>
            Inappropriate content
          </button>
          <button className="btn-photos-report" id="btn-photos-dislike" type="submit" data-target="problem-popup" onClick={props.onFlagClick}>
            I don't like this photo
          </button>
          <button className="btn-photos-cancel" id="btn-photos-cancel" type="submit" data-target="problem-popup" onClick={props.onFlagClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>

  );
};

export default PhotoItem;
