import React from 'react';

const Retry = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Retry</h1>
    <h3>You have only 3 attempts</h3>
    <button className="retry" onClick={Retry}>Retry</button>
  </div>
);

export default Retry;