import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';
import { generatePalette } from './colorHelper';

function App() {
  return (
    <div className="App">
      <Pallette {...generatePalette(seedColors[4]) }/>
    </div>
  );
}

export default App;
