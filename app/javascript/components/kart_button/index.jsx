import React from 'react';
import ReactDOM from 'react-dom';

const KartButton = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<KartButton />, document.getElementById('kart-button'))
})

export default KartButton;
