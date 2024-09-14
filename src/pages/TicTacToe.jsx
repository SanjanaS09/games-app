import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TicTacToe.css';

const Square = ({ value, onClick, isWinningSquare }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button
      className={`${style} ${isWinningSquare ? 'square--winner' : ''}`}
      onClick={onClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [previousStatus, setPreviousStatus] = React.useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xTurn, setXTurn] = React.useState(true);
  const winnerInfo = calculateWinner(previousStatus[stepNumber]);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];
  const xO = xTurn ? "X" : "O";

  const navigate = useNavigate();

  const handleClick = (i) => {
    const previousStatusPoint = previousStatus.slice(0, stepNumber + 1);
    const current = previousStatusPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setPreviousStatus([...previousStatusPoint, squares]);
    setStepNumber(previousStatusPoint.length);
    setXTurn(!xTurn);
  };

  const handleExit = () => {
    navigate('/Games');
  };

  const handleRestart = () => {
    setPreviousStatus([Array(9).fill(null)]);
    setStepNumber(0);
    setXTurn(true);
  };

  return (
    <div className="TTT-container">
      <button className="exit-button" onClick={handleExit}>X</button>
      <div className="TTT-card">
        <Board
          squares={previousStatus[stepNumber]}
          onClick={handleClick}
          winningSquares={winningSquares}
        />
        <div className="info-wrapper">
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
        <button className="restart-button" onClick={handleRestart}>
          {winner ? "Play Again" : "Restart Game"}
        </button>
      </div>
    </div>
  );
};

const Board = ({ squares, onClick, winningSquares }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square
        key={i}
        value={square}
        onClick={() => onClick(i)}
        isWinningSquare={winningSquares.includes(i)}
      />
    ))}
  </div>
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

export default TicTacToe;
