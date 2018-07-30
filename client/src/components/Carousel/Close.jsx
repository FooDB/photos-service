import React from 'react';

const Close = ({clickFunc, glyph}) => (
  <div className='close' data-target="popup" onClick={clickFunc}> 
    {glyph}
  </div>
);

export default Close;