import { useState } from "react";
import CheckerBoard from "./Components/CheckerBoard";
import "./App.css";

const App = () => {
  const color1 = "fuchsia";
  const color2 = "silver";
  const initialBoard = Array(8).fill(null).map((_, row) => {
    if (row < 3) {
      return Array(8).fill(null).map((_, col) => {
        if ((row + col) % 2 === 1) {
          return { color: color1 };
        }
        return null;
      });
    }
    if (row > 4) {
      return Array(8).fill(null).map((_, col) => {
        if ((row + col) % 2 === 1) {
          return { color: color2, isSelected: false };
        }
        return null;
      });
    }
    return Array(8).fill(null);
  }
  );

  const [boardState, setBoardState] = useState(initialBoard);



  const handleCellClick = (row, col) => {
    if (boardState[row][col] !== null) {
      const newBoardState = boardState.map((r, rIndex) => {
        return r.map((c, cIndex) => {
          if (rIndex === row && cIndex === col) {
            return { ...c, isSelected: true };
          }
          else if (c !== null) {
            return { ...c, isSelected: false };
          }
          return c;
        });
      });
      setBoardState(newBoardState);
    }
  };

  return (
    <div className="container">
      <h1>Checkers Game</h1>
      <CheckerBoard boardState={boardState} onCellClick={handleCellClick} />
    </div>
  );
};

export default App;
