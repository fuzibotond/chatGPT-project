import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChallengeList from './components/ChallengeList';
import ChallengeCreate from './components/ChallengeCreate';
import UserProfile from './components/UserProfile';
import styled from 'styled-components';

// Create a container component to apply the background color and typography
const AppContainer = styled.div`
  background-color: var(--background-color);
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: var(--primary-color);
  color: #fff;
  padding: 1rem;
  text-align: center;
  h1 {
    font-size: 2rem;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header>
          <h1>Challenge Manager</h1>
          {/* Add your navigation components here */}
        </Header>
        <Main>
          <ChallengeList />
          <ChallengeCreate />
          <UserProfile />
          {/* Add your content components here */}
        </Main>
        <Footer>
          {/* Add footer content here */}
        </Footer>
      </AppContainer>
    </Provider>
  );
}

export default App;
