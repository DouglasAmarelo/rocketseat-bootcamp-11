import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <SignIn />
    </div>
  );
};

export default App;
