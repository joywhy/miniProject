import React, { useState } from 'react';
import Square from './Square';

import './Board.css';
const Board = ({ onClick, squares }) => {
  const renderSqure = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <>
      <h1 className="status">Tic Tac Toe</h1>
      <div className="board-wrapper">
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
      </div>
    </>
  );
};

export default Board;
