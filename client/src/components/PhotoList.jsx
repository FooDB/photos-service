import React from 'react';
import PhotoItem1 from './PhotoItem1.jsx';
import PhotoItem2 from './PhotoItem2.jsx';
import PhotoItem3 from './PhotoItem3.jsx';
import PhotoItem4 from './PhotoItem4.jsx';
import PhotoItem from './PhotoItem.jsx';

var PhotoList = (props) => {
  console.log('photos array length: ', props.photos.length);
  if(props.photos.length === 4) {
    return (
      <div class="photos-gallery-layout">
        {props.photos.map(photo => 
          <PhotoItem3 key={photo.id} photo={photo} />
        )}
      </div>
    );
  } else {
    return (
      <div className="photos-gallery-content">
        {props.photos.map((photo, index) => 
          <PhotoItem key={index} index={index} photo={photo} />
        )}
      </div>
    );
  }
}

export default PhotoList;
