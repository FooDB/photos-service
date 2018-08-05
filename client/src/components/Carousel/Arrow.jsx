import React from 'react';

import styles from './Arrow.css';

const Arrow = ({ direction, clickFunc, glyph}) => (
  <div className={`slide-arrow-${direction}`} onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Arrow;