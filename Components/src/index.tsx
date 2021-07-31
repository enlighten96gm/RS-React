import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

const HelloWorld = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
