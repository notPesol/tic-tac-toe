import React from "react";

const style = {
  background: 'lightgray',
  border: '2px solid darkgray',
  fontSize: '40px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
}

const Square = ({ onClick, value }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;