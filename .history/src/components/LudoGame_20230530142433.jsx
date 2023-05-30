import React, { useState } from 'react';
import { useEffect } from 'react';

const LudoGame = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [playerPositions, setPlayerPositions] = useState({
    1: [0, 0, 0, 0],
    2: [0, 0, 0, 0],
  });

  useEffect(() => {
    // Check for game end conditions or any other logic here
  }, [playerPositions]);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);

    // Update player positions based on dice value and current turn
    const newPositions = { ...playerPositions };
    const currentPlayerPositions = newPositions[playerTurn];
    const newPositionIndex = currentPlayerPositions.findIndex((pos) => pos === 0);
    if (newPositionIndex !== -1) {
      currentPlayerPositions[newPositionIndex] = newValue;
    }
    setPlayerPositions(newPositions);

    // Switch player turn
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-2xl mb-4">Ludo Game</h1>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {playerPositions[1].map((position, index) => (
            <div
              key={index}
              className={`bg-red-500 rounded-lg h-16 w-16 ${
                position === 0 && playerTurn === 1 ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                // Handle click event for moving the player piece
                if (position === 0 && playerTurn === 1) {
                  // Move the player piece logic here
                }
              }}
            ></div>
          ))}
        </div>

        {/* Render other player positions similarly */}

        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={rollDice}
            disabled={playerTurn !== 1}
          >
            Roll Dice
          </button>
          <span className="ml-4">Dice Value: {diceValue}</span>
        </div>

        <div className="mb-4">
          <strong>Current Turn:</strong> Player {playerTurn}
        </div>

        {/* Render game end or other status messages */}
      </div>
    </div>
  );
};

export default LudoGame;
