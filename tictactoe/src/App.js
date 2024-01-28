import Board from './component/Board';
import Controller from './Controller';
import './App.css';
import { useState } from 'react';
function App() {
  const [player, setPlayer] = useState('X');
  function handlePlayer() {
    player === 'X' ? setPlayer('O') : setPlayer('X');
  }
  return (
    <div className="app">
      <Board player={player} setPlayer={handlePlayer} />
      <Controller player={player} />
    </div>
  );
}

export default App;
