import React, { useState } from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Board from './components/Board';

/**
 * The main component for the app.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const onUpdateScore = (newScore) => {
    setScore(newScore + score);
  }

  const onGameOver = () => {
    setGameOver(true);
  }

  return (
    <Layout>
      <Header score={score} best={score} />
      <Board isDisabled={gameOver} onGameOver={onGameOver} onUpdateScore={onUpdateScore} />
    </Layout>
  )
}

export default App
