import CheckerPiece from "./CheckerPiece";

export const cellSize = 50;



const CheckerBoard = ({ boardState, onCellClick, onPieceClick }) => {

  return (
    <svg width={cellSize * 8} height={cellSize * 8}>
      {boardState.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <rect
            key={`${rowIndex}-${colIndex}`}
            x={colIndex * cellSize}
            y={rowIndex * cellSize}
            width={cellSize}
            height={cellSize}
            fill={(rowIndex + colIndex) % 2 === 0 ? "white" : "black"}
            stroke="gray"
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))
      )}

      {boardState.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (cell) {
            const color = cell.color;
            return (
              <CheckerPiece key={`${rowIndex}-${colIndex}`} color={color} pos={[rowIndex, colIndex]} onPieceClick={onPieceClick} />
            );
          }
          return null;
        })
      )}
    </svg>
  );
};

export default CheckerBoard;
