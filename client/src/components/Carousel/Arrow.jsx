import React from 'react';

const Arrow = ({ direction, clickFunc, glyph}) => (
  <div className={`slide-arrow-${direction}`} onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Arrow;