import Board from './component/Board';
import './App.css';
import Controller from './component/Controller.js';
import { useState } from 'react';
function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xisNext, setXisNext] = useState(true);

  const [stepNumber, setStepNumber] = useState(0);
  const currentSquares = history[stepNumber].squares;
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();

    if (winner || currentSquares[i]) return;
    // history 그만큼 삭제한 복사본

    newSquares[i] = xisNext ? 'X' : 'O';
    setHistory([...newHistory, { squares: newSquares }]);
    setXisNext(!xisNext);
    setStepNumber(newHistory.length);
  };

  const calculateWinner = (squares) => {
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
        return squares[a];
      }
    }

    return null;
  };
  const winner = calculateWinner(currentSquares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player : ${xisNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <Board onClick={(i) => handleClick(i)} squares={currentSquares} />
      <Controller
        status={status}
        history={history}
        setXisNext={setXisNext}
        setStepNumber={setStepNumber}
      />
    </div>
  );
}

export default App;
