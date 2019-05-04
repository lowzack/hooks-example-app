import React from 'react';
import './App.scss';
import { RandomCardProfile } from './components/RandomCardProfile/RandomCardProfile';
import { ContextCardProfile } from './components/ContextCardProfile/ContextCardProfile';
import { ProfileContextProvider } from './components/ProfileProvider/ProfileProvider';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="yellow">React Hooks &amp; Context</h1>
      <h2 className="red">Component State</h2>
      <div className="container">
        <RandomCardProfile />
        <RandomCardProfile />
      </div>
      <h2 className="red">Context</h2>
      <div className="container">
        <ProfileContextProvider>
          <ContextCardProfile />
          <ContextCardProfile />
        </ProfileContextProvider>
      </div>
    </div>
  );
}

export default App;
