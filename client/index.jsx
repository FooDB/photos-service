import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';


ReactDOM.render(<App />, document.getElementById('photos'));

window.Photos = App;
