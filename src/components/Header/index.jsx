import React, { useState } from 'react';
import styled from 'styled-components';
import ScoreCounter from '../ScoreCounter';

const StyledHeader = styled.header`
  margin-block-end: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-block: 0;
  line-height: 1;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Counters = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function Header() {
  const [score, setScore] = useState(0);

  return (
    <StyledHeader>
      <Row>
        <Title>2048</Title>
        <Counters>
          <ScoreCounter score={0} label="Best" />
          <ScoreCounter score={score} label="Score" />
        </Counters>
      </Row>
    </StyledHeader>
  );
}

export default Header;
