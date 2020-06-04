import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </div>
  );
};

export default App;
