import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { noZerosInMatrix, shiftAndSumMatrix, generateMatrix, replaceRandomZeroMatrix } from '../../utils/matrix';
import { replaceRandomZero } from '../../utils/array';
import Square from '../Square';

const startingBoard = replaceRandomZeroMatrix(generateMatrix(4));

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
  gap: 0.5rem;
`;

function Board({ onUpdateScore, onGameOver }) {
  const [board, setBoard] = useState(startingBoard);

  if (noZerosInMatrix(board)) {
    onGameOver();

    window.removeEventListener('keydown', onUserInput);
  }

  /**
   * Handles user input for changing the direction of the game.
   *
   * @param {Object} event - The keyboard event object.
   * @param {string} event.key - The key that was pressed.
   */
  const onUserInput = (event) => {
    const { key } = event;
    // let randomGenerated = false;

    // If the key is not an arrow key, ignore it.
    if (!Object.keys(keyMap).includes(key)) {
      return;
    }


    let [newBoard, moveSum] = shiftAndSumMatrix(board, keyMap[key]);
    // newBoard = replaceRandomZeroMatrix(newBoard); // Prepare next move state.

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
    <Wrapper>
      {board.map((row, rowIndex) => (
        row.map((cell, columnIndex) => {
          return <span>{board[rowIndex][columnIndex]}</span>;
        })
      ))}
    </Wrapper>
  )
}

export default Board;
