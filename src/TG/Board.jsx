import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const winner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) return;

    if (winner) return;

    const copyState = [...state];

    copyState[index] = isXTurn ? "X" : "Y";

    setState(copyState);

    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-xl shadow-lg">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />

        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />

        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
      {winner ? (
        <h2 className="text-2xl font-bold text-green-600 mt-4">
          Winner is {winner}
        </h2>
      ) : (
        <p className="mt-4 text-xl font-semibold">Turn:{isXTurn ? "X" : "Y"}</p>
      )}
      {
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Reset Game
        </button>
      }
    </div>
  );
};

export default Board;
