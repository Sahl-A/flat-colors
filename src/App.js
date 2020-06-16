import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';

function App() {
  return (
    <div className="App">
      <Pallette {...seedColors[4]}/>
    </div>
  );
}

export default App;
