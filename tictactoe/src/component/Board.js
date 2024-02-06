import React, { useState } from 'react';
import Square from './Square';
import Controller from './Controller';
import './Board.css';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xisNext ? 'X' : '0';
    setSquares(newSquares);
    setXisNext(!xisNext);
  };
  const renderSqure = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <h1 className="status">Tic Tac Toe</h1>
      <div className="board-row">
        {renderSqure(0)}
        {renderSqure(1)}
        {renderSqure(2)}
      </div>
      <div className="board-row">
        {renderSqure(3)}
        {renderSqure(4)}
        {renderSqure(5)}
      </div>
      <div className="board-row">
        {renderSqure(6)}
        {renderSqure(7)}
        {renderSqure(8)}
      </div>
      <Controller xisNext={xisNext} />
    </div>
  );
};

export default Board;
