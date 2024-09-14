import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TicTacToe.css'; // Ensure this path is correct

// Square component to render each square
const Square = ({ value, onClick, isWinningSquare }) => {
  const className = `squares ${value ? value : ''} ${isWinningSquare ? 'square--winner' : ''}`;
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

// Board component to render the 3x3 grid of squares
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

const WelcomePage = ({ onStart }) => (
  <div className="welcome-page">
    <div className="welcome-header">
      <h1>Welcome to Tic-Tac-Toe!</h1>
    </div>
    <p className="instructions">
      Click on an empty cell to place your X or O.The game ends when someone gets three symbols in a row, column, or diagonal. If the grid is full without a winner, it's a draw.
    </p>
    <button className="button" onClick={onStart}>Start Game</button>
  </div>
);

// Main TicTacToe component
const TicTacToe = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXIsNext] = React.useState(true);
  const [showWelcome, setShowWelcome] = React.useState(true); 
  const navigate = useNavigate();

  // Calculate winner and winning squares
  const currentSquares = history[stepNumber];
  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];
  const nextPlayer = xIsNext ? "X" : "O";

  // Handle click on a square
  const handleClick = (i) => {
    if (winner || currentSquares[i]) return;

    const newSquares = currentSquares.slice();
    newSquares[i] = nextPlayer;

    setHistory(history.slice(0, stepNumber + 1).concat([newSquares]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  // Handle exit and restart
  const handleExit = () => {
    navigate('/Games');
  };

  const handleRestart = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  // Handle start button click
  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <div className="TTT-container">
      <button className="exit-button" onClick={handleExit}>X</button>
      {showWelcome ? (
        <WelcomePage onStart={handleStart} />
      ) : (
        <>
          <div className="TTT-card">
            <Board
              squares={currentSquares}
              onClick={handleClick}
              winningSquares={winningSquares}
            />
            <div className="info-wrapper">
              <h3>{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</h3>
            </div>
            <button className="button" onClick={handleRestart}>
              {winner ? "Play Again" : "Restart Game"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Function to calculate the winner of the game
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export default TicTacToe;
