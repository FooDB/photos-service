import React from 'react';
import styles from './Close.css';

const Close = ({clickFunc, glyph}) => (
  <div className='close' data-target="popup" onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Close;
