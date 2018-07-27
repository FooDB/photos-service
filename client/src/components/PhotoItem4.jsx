import React from 'react';

const PhotoItem4 = ({photo}) => {
  return (
    <li className="photos-gallery-li">
      <div className="photo">
        <img src={photo} />
      </div>
    </li>
  );
};

export default PhotoItem4;
