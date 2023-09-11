import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const Main = styled.main`
    width: min(100%, 20rem);
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}

export default Layout;
