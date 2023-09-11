import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
`;

const Label = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
`;

const Value = styled.span`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-base);
  color: var(--color-text);
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-stroke);
  border-radius: 0.5rem;
  width: 2.5rem;
`;

/**
 * The score counter component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the score counter.
 * @param {number} props.score - The value of the score counter.
 * @returns {JSX.Element} The rendered ScoreCounter component.
 */
function ScoreCounter(props) {
  const { label, score } = props;

  return (
    <Group>
      <Value>{score}</Value>
      <Label>{label}</Label>
    </Group>
  );
}

ScoreCounter.propTypes = {
  label: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

export default ScoreCounter;
