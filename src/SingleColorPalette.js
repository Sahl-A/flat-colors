import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

class SingleColorPalette extends Component {
    state = {
        colorFormat: 'hex',
    }

    _colorsArr = this.props.colorsArr.colors;
    _currColor = this.props.match.params.colorId;
    _currPalette = this.props.match.params.paletteId

    getShadedOfColor = () => {
        const colorShades = [];
        for( let i in this._colorsArr) {
            colorShades.push(this._colorsArr[i].find(color => color.name.split(' ')[0] === this._currColor));
        }
        return colorShades.slice(1);
    }

    colorFormatChange = (format) => {
        this.setState({colorFormat: format})
    }

    render() {
        console.log(`SingleColorPalette ==>`, this._colorsArr, this._currColor, this.getShadedOfColor());
        const {colorFormat} = this.state;
        const colorBoxes = this.getShadedOfColor().map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                color={color[colorFormat]}
                isSingleColorBox />
        ))
        return(
            <div className="Palette">
                <Navbar colorFormatChange={this.colorFormatChange} />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className="goBack SingleColorBox">
                        <Link to={`/palette/${this._currPalette}`} className="ColorBox-copy go-back">go Back</Link>
                    </div>
                </div>
                <Footer paletteName={this._currColor} />
            </div>
        )
    }
}

export default SingleColorPalette;