import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { shiftAndSumMatrix } from '../../utils/matrix';

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


// The board will be a 4x4 grid of squares.
// The square position not be animated. On user input, the
// square will move to the new position using a CSS transition.

function Board() {
  // State of the 4x4 board:
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 0],
  ]);

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

    // Based on the direction, calculate the new board state.
    setBoard(shiftAndSumMatrix(board, keyMap[key]));
  }

  useEffect(() => {
    window.addEventListener('keydown', onUserInput);

    return () => {
      window.removeEventListener('keydown', onUserInput);
    }
  }, [onUserInput]);

  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Board;
