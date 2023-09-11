import styled from 'styled-components';

import { shiftAndSumMatrix } from '../../utils/matrix';

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
  const [direction, setDirection] = useState('none'); // The default direction is none.

  // State of the 4x4 board:
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  // Based on the direction, calculate the new board state.
  const newMatrix = shiftAndSumMatrix(board, direction);

  /**
   * Handles user input for changing the direction of the game.
   *
   * @param {Object} event - The keyboard event object.
   * @param {string} event.key - The key that was pressed.
   */
  const onUserInput = (event) => {
    const { key } = event;

    if (key === 'ArrowUp') {
      setDirection('up');
    } else if (key === 'ArrowDown') {
      setDirection('down');
    } else if (key === 'ArrowLeft') {
      setDirection('left');
    } else if (key === 'ArrowRight') {
      setDirection('right');
    }
  }

  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Board;
