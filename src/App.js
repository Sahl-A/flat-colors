import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import Pallette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './colorHelper';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  state = {
    palettes: seedColors,
    currPalette: '',
  };

  componentDidUpdate() {
    localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  };

  componentWillMount() {
    const storedPalettes = JSON.parse(localStorage.getItem('palettes'));
    if (storedPalettes) this.setState({palettes: storedPalettes});  
  };

  // Find palette in seedColors file
  findPalette = (id) => {
    return this.state.palettes.find(palette => palette.id === id)
  }

  // Save new palette from NewPaletteForm
  saveNewPalette = (newPalette) => {
    this.setState( {palettes: [...this.state.palettes, newPalette]} );
  }

  // Delete palette at MiniPaltte
  deletePalette = (id) => {
    this.setState( st => ({palettes: st.palettes.filter(palette => palette.id !== id)}) )
  }

 /*  // When clicking on a miniPalette on paletteList
  onMiniPalette = (id) => {
    return this.setState({currPalette: this.state.palettes.find(palette => palette.id === id)})
  } */

  render() {

    return (
      <div className="App">
        <Route 
            exact 
            path="/Palette/:id" 
        >
              {({match}) => (
                <CSSTransition in={match !==null} timeout={500} unmountOnExit classNames="page">
                  {match? <Pallette {...generatePalette(this.findPalette(match.params.id))}/>: <React.Fragment></React.Fragment>}
                </CSSTransition>
              )}
        </Route>
        <Route
          exact
          path="/create-palette"
        >
            {(routerProps) => (
                <CSSTransition in={routerProps.match !==null} timeout={500} unmountOnExit classNames="page">
                    <NewPaletteForm savePalette={this.saveNewPalette} {...routerProps} palettes={this.state.palettes} />
                </CSSTransition>
              )}
        </Route>
        <Route 
          exact 
          path="/" 
        >
            {(routerProps) => (
                <CSSTransition in={routerProps.match !==null} timeout={500} unmountOnExit classNames="page">
                  <PaletteList routerProps={routerProps} palettes={this.state.palettes} deletePalette={this.deletePalette}/>
                </CSSTransition>
              )}
        </Route>
        <Route 
          exact 
          path="/palette/:paletteId/:colorId"  
        >
            {(routerProps) => (
                <CSSTransition in={routerProps.match !==null} timeout={500} unmountOnExit classNames="page">
                  {<SingleColorPalette {...routerProps} colorsArr={routerProps.match && generatePalette(this.findPalette(routerProps.match.params.paletteId))}/>}
                </CSSTransition>
              )}
        </Route>
      </div>
    );
  }
  
}

export default App;
