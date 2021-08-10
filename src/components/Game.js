import React, { useState } from "react";

import Board from "./Board";

import { calculateWinner } from "../helper";

const style = {
  width: '200px',
  margin: '20px auto',
  textAlign: 'center'
}

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);

  const handleOnClick = (index) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const square = [...current];

    // if user click an occupied square or if game is won, return
    if (winner || square[index]) return;

    // put X or O in the clicked square
    square[index] = xIsNext ? 'X' : 'O';

    setHistory([...timeInHistory, square]);
    setStepNumber(prevNum => prevNum + 1);
    setXisNext(!xIsNext);
  }

  const jumpTo = (index) => {
    setStepNumber(index);
    setXisNext(index % 2 === 0);
  }

  const renderMove = () => {
    const listButton = history.map((step, index) => {
      const destination = index ? `Go to move #${index}` : 'Go to start';
      return (
        <li style={{ textAlign: 'left' }} key={index}>
          <button onClick={() => jumpTo(index)}>
            {destination}
          </button>
        </li>
      )
    });

    return listButton;
  }

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleOnClick} />
      <div style={style}>
        <p>{
          winner ?
            'Winner: ' + winner
            : 'Next player: ' + (xIsNext ? 'X' : 'O')
        }
        </p>
        {renderMove()}
      </div>
    </>
  );
};

export default Game;