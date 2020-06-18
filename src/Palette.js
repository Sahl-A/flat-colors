import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

class Pallette extends Component {

    render() {
        const colorBox = this.props.colors.map(color => (
            <ColorBox key={color.name} name={color.name} color={color.color}/>
        ))
        return(
            <div className="Palette">
                {/* Nav bar goes here */}
                <div className="Palette-colors">{colorBox}</div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallette;