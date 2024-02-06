import React, { useState } from 'react';
import Square from './Square';
import Controller from './Controller.js';
import './Board.css';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    if (winner || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = xisNext ? 'X' : 'O';
    setSquares(newSquares);
    setXisNext(!xisNext);
    //calculateWinner(squares); //그전 상태값이 출력됨.
  };
  const renderSqure = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const calculateWinner = (squares) => {
    // console.log(squares);
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // console.log('winner!' + squares[a]);
        return squares[a];
      }
    }
    // console.log('not yet');
    return null;
  };
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player : ${xisNext ? 'X' : 'O'}`;
  }

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
      <Controller status={status} />
    </div>
  );
};

export default Board;
