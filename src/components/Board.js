import React from "react";

import Square from "./Square";

const style = {
  border: '4px solid darkgray',
  borderRadius: '10px',
  display: "grid",
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  // gridTemplateColumns: 'auto auto auto',
  width: '250px',
  height: '250px',
  margin: '10px auto'
}

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>

      {squares.map((square, index) => (
        <Square
          key={index}
          onClick={() => onClick(index)}
          value={square}
        />
      ))}

    </div>
  );
};

export default Board;