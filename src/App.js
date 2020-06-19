import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';
import { generatePalette } from './colorHelper';

function App() {
  const findPalette = (id) => {
    return seedColors.find(palette => palette.id === id)
  }
  
  return (
    <div className="App">
      <Switch>
        <Route 
          exact 
          path="/" 
          render={()=> <h1> Palette List goes here</h1>} />

        <Route 
          exact 
          path="/Palette/:id" 
          render={(routeProps) => <Pallette  {...generatePalette(findPalette(routeProps.match.params.id))}/>} />
      </Switch>

      {/* <Pallette {...generatePalette(seedColors[4]) }/> */}
    </div>
  );
}

export default App;
