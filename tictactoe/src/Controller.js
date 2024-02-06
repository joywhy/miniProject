import React from 'react';

const Controller = ({ player }) => {
  const status = `Next Player : ${player}`;
  return (
    <div>
      <h2>{status}</h2>
      <button>Go to game start</button>
      <button>Go to move #1</button>
    </div>
  );
};

export default Controller;
