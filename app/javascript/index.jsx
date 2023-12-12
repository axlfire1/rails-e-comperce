import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const rootDom = document.getElementById('root-component')
const root = ReactDOM.createRoot(rootDom);

root.render(
  <>
    <App />
  </>
);
