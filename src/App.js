import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './colorHelper';

class App extends Component {
  state = {
    palettes: seedColors,
  };

  // Find palette in seedColors file
  findPalette = (id) => {
    return this.state.palettes.find(palette => palette.id === id)
  }

  // Save new palette from NewPaletteForm
  saveNewPalette = (newPalette) => {
    this.setState({palettes: [...this.state.palettes, newPalette]})
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/Palette/new"
            render={(routeProps) => <NewPaletteForm savePalette={this.saveNewPalette} {...routeProps} palettes={this.state.palettes} />} />
          <Route 
            exact 
            path="/" 
            render={(routerProps)=> <PaletteList routerProps={routerProps} palettes={this.state.palettes}/>} />
  
          <Route 
            exact 
            path="/palette/:paletteId/:colorId" 
            render={(routerProps)=> <SingleColorPalette {...routerProps} colorsArr={generatePalette(this.findPalette(routerProps.match.params.paletteId))}/>} />
  
          <Route 
            exact 
            path="/Palette/:id" 
            render={(routeProps) => <Pallette  {...generatePalette(this.findPalette(routeProps.match.params.id))}/>} />
        </Switch>
  
        {/* <Pallette {...generatePalette(seedColors[4]) }/> */}
      </div>
    );
  }
  
}

export default App;
