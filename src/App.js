import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';
import { generatePalette } from './colorHelper';

function App() {
  console.log(generatePalette(seedColors[4]) )
  return (
    <div className="App">
      <Pallette {...seedColors[4]}/>
    </div>
  );
}

export default App;
