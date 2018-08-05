import React from 'react';
import styles from './ImageSlide.css';

const ImageSlide = ({ url }) => {
  // const styles = {
  //   backgroundImage: `url(${url})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };
  return (
    <div className="image-slide">
      <img src={url} alt="" />
    </div>
  );
};

export default ImageSlide;
