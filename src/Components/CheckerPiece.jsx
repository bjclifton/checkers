import { cellSize } from "./CheckerBoard";

const CheckerPiece = ({ color, pos, onPieceClick }) => {
  const radius = cellSize / 3;
  const [row, col] = pos;
  return (
    <circle
      cx={col * cellSize + cellSize / 2}
      cy={row * cellSize + cellSize / 2}
      r={radius}
      fill={color}
      stroke={"gray"}
      strokeWidth={2}
      onClick={() => onPieceClick(row, col)}
    />
  );
};

export default CheckerPiece;