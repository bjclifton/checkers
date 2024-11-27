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
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handlePieceMove = (row, col) => {
    // Check if move is valid, within bounds, and empty
    if (row < 0 || row > 7 || col < 0 || col > 7 || boardState[row][col]) {
      return;
    }

    // Check if move is diagonal
    const selectedRow = selectedPiece.row;
    const selectedCol = selectedPiece.col;
    const rowDiff = Math.abs(row - selectedRow);
    const colDiff = Math.abs(col - selectedCol);
    if (rowDiff !== 1 || colDiff !== 1) {
      return;
    }

    // Move the piece
    const newBoard = boardState.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === selectedRow && colIndex === selectedCol) {
          return null;
        }
        if (rowIndex === row && colIndex === col) {
          return { color: selectedPiece.color, isSelected: false };
        }
        return cell;
      })
    );
    setBoardState(newBoard);
    setSelectedPiece(null);
  };




  const handleCellClick = (row, col) => {
    if (selectedPiece && !boardState[row][col]) { handlePieceMove(row, col); }

    else {
      const newBoard = boardState.map((r, rowIndex) =>
        r.map((cell, colIndex) => {
          if (rowIndex == row && colIndex == col) {
            return { ...cell, isSelected: true };
          }
          else if (cell) {
            return { ...cell, isSelected: false };
          }
          return cell;
        })
      );
      setBoardState(newBoard);
      setSelectedPiece({ row, col, color: boardState[row][col].color });
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
