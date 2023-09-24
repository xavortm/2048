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
`;

function Square({ number }) {
  return (
    <Cell>
      {number === 0 ? '' : number}
    </Cell>
  );
}

export default Square;
