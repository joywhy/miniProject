import React from 'react';

const Controller = ({ xisNext }) => {
  const status = `Next Player : ${xisNext ? 'x' : '0'}`;
  return (
    <div>
      <h2>{status}</h2>
      <button>Go to game start</button>
      <button>Go to move #1</button>
    </div>
  );
};

export default Controller;
