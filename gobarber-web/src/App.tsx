import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <AppProvider>
        <SignIn />
      </AppProvider>
    </div>
  );
};

export default App;
