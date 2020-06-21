import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    state = {
        colorFormat: 'hex',
    }

    _colorsArr = this.props.colorsArr.colors;
    _currColor = this.props.match.params.colorId

    getShadedOfColor = () => {
        const colorShades = [];
        for( let i in this._colorsArr) {
            colorShades.push(this._colorsArr[i].find(color => color.name.split(' ')[0] === this._currColor));
        }
        return colorShades.slice(1);
    }

    render() {
        console.log(`SingleColorPalette ==>`, this._colorsArr, this._currColor, this.getShadedOfColor());
        const {colorFormat} = this.state;
        return(
            this.getShadedOfColor().map(color => (
                <ColorBox 
                    key={color.name} 
                    name={color.name} 
                    color={color[colorFormat]}
                    // colorsArr={colors}
                    // singleColorPaletteURL={`/palette/${id}/${color.name.split(' ')[0]}`}
                />
            ))
        )
    }
}

export default SingleColorPalette;