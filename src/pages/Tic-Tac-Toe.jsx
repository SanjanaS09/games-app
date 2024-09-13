import React from 'react';
import '../styles/Tic-Tac-Toe.css'

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;
    return (
      <button className={style} onClick={onClick}>
        {value}
      </button>
    );
  };
  
  const TicTacToe = () => {
    const [previousStatus, setPreviousStatus] = React.useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = React.useState(0);
    const [xTurn, setXTurn] = React.useState(true);
    const winner = calculateWinner(previousStatus[stepNumber]);
    const xO = xTurn ? "X" : "O";
  
    const handleClick = (i) => {
      const previousStatusPoint = previousStatus.slice(0, stepNumber + 1);
      const current = previousStatusPoint[stepNumber];
      const squares = [...current];
      // return if won or occupied
      if (winner || squares[i]) return;
      // select square
      squares[i] = xO;
      setPreviousStatus([...previousStatusPoint, squares]);
      setStepNumber(previousStatusPoint.length);
      setXTurn(!xTurn);
    };

  
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <Board squares={previousStatus[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
      </>
    );
  };
  
  
  
  const Board = ({ squares, onClick }) => (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
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
        return squares[a];
      }
    }
    return null;
  }

  export default TicTacToe;
  