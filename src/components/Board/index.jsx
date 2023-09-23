import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { noZerosInMatrix, shiftAndSumMatrix, generateMatrix } from '../../utils/matrix';
import { replaceRandomZero } from '../../utils/array';

const startingBoard = generateMatrix(4);
const randomRow = Math.floor(Math.random() * startingBoard.length - 1);
startingBoard[randomRow] = replaceRandomZero(startingBoard[randomRow]);

const keyMap = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

const Wrapper = styled.div`
  border: 1px solid var(--color-stroke);
  border-radius: 0.5rem;
  padding: 0.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(4, 1fr);
  gap: 0.5rem;
`;

function Board({ onUpdateScore, onGameOver }) {
  const [board, setBoard] = useState(startingBoard);

  /**
   * Handles user input for changing the direction of the game.
   *
   * @param {Object} event - The keyboard event object.
   * @param {string} event.key - The key that was pressed.
   */
  const onUserInput = (event) => {
    const { key } = event;

    // If the key is not an arrow key, ignore it.
    if (!Object.keys(keyMap).includes(key)) {
      return;
    }

    if (noZerosInMatrix(board)) {
      onGameOver();
      return;
    }

    let [newBoard, moveSum] = shiftAndSumMatrix(board, keyMap[key]);
    newBoard = replaceRandomZero(newBoard); // Prepare next move state.

    setBoard(newBoard);
    onUpdateScore(moveSum);
  }

  useEffect(() => {
    window.addEventListener('keydown', onUserInput);

    return () => {
      window.removeEventListener('keydown', onUserInput);
    }
  }, [onUserInput]);

  return (
    <Wrapper />
  )
}

export default Board;
