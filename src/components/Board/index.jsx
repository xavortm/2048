import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { shiftAndSumMatrix, generateMatrix, replaceRandomZeroMatrix, noValidMoves } from '../../utils/matrix';
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
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
  position: relative;
  height: calc(4.25rem * 4 + 0.875rem * 3);
`;

function Board({ isDisabled, onUpdateScore, onGameOver }) {
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
    if (isDisabled || !Object.keys(keyMap).includes(key)) {
      return;
    }

    let [newBoard, moveSum] = shiftAndSumMatrix(board, keyMap[key]);

    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      newBoard = replaceRandomZeroMatrix(newBoard); // Prepare next move state.
    }

    setBoard(newBoard);
    onUpdateScore(moveSum);

    if (noValidMoves(board)) {
      onGameOver();
    }
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
        row.map((cell, columnIndex) =>
          <Square
            x={rowIndex * 10 + rowIndex * 8 + 2}
            y={columnIndex * 10 + columnIndex * 8 + 2}
            key={`${rowIndex}-${columnIndex}`}
            number={cell}
          />)
      ))}
    </Wrapper>
  )
}

export default Board;
