import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

class Pallette extends Component {
    state = {
        level: '500',
        colorFormat: 'hex',
    }

    onSliderChange = (level) => {
        this.setState({level})
    }

    colorFormatChange = (colorFormat) => {
        this.setState({colorFormat})
    }

    render() {
        const {colors} = this.props;
        const {level, colorFormat} = this.state;
        const colorBox = colors[level].map(color => (
            <ColorBox key={color.id} name={color.name} color={color[colorFormat]}/>
        ))
        return(
            <div className="Palette">
                <Navbar 
                    level={level} 
                    onSliderChange={this.onSliderChange}
                    colorFormatChange={this.colorFormatChange} />     

                <div className="Palette-colors">{colorBox}</div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallette;