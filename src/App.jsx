import Layout from './components/Layout';
import Header from './components/Header';
import Board from './components/Board';

/**
 * The main component for the app.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <Layout>
      <Header />
      <Board />
    </Layout>
  )
}

export default App
