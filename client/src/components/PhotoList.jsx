import React from 'react';

import PhotoItem from './PhotoItem.jsx';

var PhotoList = (props) => (
  <div className="photos">
    {props.list.map(item =>
      <PhotoItem key={item.id} item={item} />
    )}
  </div>
);


export default PhotoList;
