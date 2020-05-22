import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
