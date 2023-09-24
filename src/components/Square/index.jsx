import styled from 'styled-components';

const Cell = styled.span`
  border-radius: 0.25rem;
  background-color: var(--color-cell-base);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  width: 4.25rem;
  height: 4.25rem;
  left: ${({ x }) => x * 4.25 / 16}rem;
  top: ${({ y }) => y * 4.25 / 16}rem;
  transition: all 0.1s ease-in-out;
`;

function Square({ number, x, y }) {
  return (
    <Cell x={x} y={y}>
      {number === 0 ? '' : number}
    </Cell>
  );
}

export default Square;
