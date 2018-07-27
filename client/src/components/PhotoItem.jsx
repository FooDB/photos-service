import React from 'react';

const PhotoItem = ({index, photo}) => {
  return (
      <div className={`item item-${index}`}>
        <div className='photo'>
          <img src={photo} />
        </div>
      </div>
  );
};

export default PhotoItem;
