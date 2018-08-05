import React from 'react';
import styles from './Flag.css';

const Flag = ({clickFunc, glyph}) => (
  <div className='flag' data-target="problem-popup" onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Flag;
