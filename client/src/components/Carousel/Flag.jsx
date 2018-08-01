import React from 'react';

const Flag = ({clickFunc, glyph}) => (
  <div className='flag' data-target="problem-popup" onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Flag;
