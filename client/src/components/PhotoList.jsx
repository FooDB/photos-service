import React from 'react';
import PhotoItem from './PhotoItem.jsx';

var PhotoList = (props) => (
  <div className="photos">
    {props.photos.map(photo =>
      <PhotoItem key={photo.id} photo={photo} />
    )}
  </div>
);


export default PhotoList;
