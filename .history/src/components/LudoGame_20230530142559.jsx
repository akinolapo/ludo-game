import React, { useState } from 'react';
import { TailwindClasses } from 'tailwindcss';

// Define the Ludo game component
const LudoGame = () => {
  // State to track the current player and dice roll
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceRoll, setDiceRoll] = useState(1);

  // Function to handle dice roll
  const rollDice = () => {
    // Generate a random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
  };

  // Function to switch players
  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  // Render the Ludo game board
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Ludo Game</h1>
      <div className="flex items-center justify-center">
        <div className="bg-red-500 w-12 h-12 rounded-full">
          {/* Display current player's token */}
        </div>
        <div className="bg-yellow-500 w-12 h-12 rounded-full mx-4">
          {/* Display dice roll */}
          <p>{diceRoll}</p>
        </div>
        <div className="bg-green-500 w-12 h-12 rounded-full">
          {/* Display opponent's token */}
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          rollDice();
          switchPlayer();
        }}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default LudoGame;
