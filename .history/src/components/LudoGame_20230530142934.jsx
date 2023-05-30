import React, { useState } from 'react';

const COLORS = ['green', 'blue', 'red', 'yellow'];
const NUM_DICE = 2;
const NUM_PLAYERS = 2;

const LudoGame = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValues, setDiceValues] = useState(new Array(NUM_DICE).fill(1));

  const rollDice = () => {
    const newDiceValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
    setDiceValues(newDiceValues);
    setCurrentPlayer((currentPlayer + 1) % NUM_PLAYERS);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">
            Player {currentPlayer + 1}'s turn
          </h1>
          <div className="flex space-x-4">
            {diceValues.map((value, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center text-lg"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={rollDice}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Roll Dice
        </bo>
      </div>
    </div>
  );
};

export default LudoGame;
