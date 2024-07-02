import React from 'react';
import IFrameComponent from './IFrameComponent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Use IFrameComponent as a JSX element */}
      <IFrameComponent customerName="Lissa" />
    </div>
  );
}

export default App;
