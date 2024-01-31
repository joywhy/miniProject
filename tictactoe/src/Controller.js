import React from 'react';

const Controller = ({ player }) => {
  return (
    <div>
      <h2>Next Player : {player}</h2>
      <button>Go to game start</button>
      <button>Go to move #1</button>
    </div>
  );
};

export default Controller;
