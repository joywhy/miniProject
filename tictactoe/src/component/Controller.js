import React from 'react';

const Controller = ({ status, history, setStepNumber, setXisNext }) => {
  function jumpTo(i) {
    setStepNumber(i);

    setXisNext(i % 2 === 0);
  }

  const moves = history.map((el, idx) => {
    const desc = idx ? `go to move # ${idx}` : `go to game start!`;
    return (
      <li key={el + idx}>
        <button onClick={() => jumpTo(idx)}>{desc}</button>
      </li>
    );
  });
  return (
    <div>
      <h2>{status}</h2>
      <ol>{moves}</ol>
    </div>
  );
};

export default Controller;
