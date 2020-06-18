import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

class Pallette extends Component {
    state = {
        level: '500',
    }

    onSliderChange = (level) => {
        this.setState({level})
    }

    render() {
        const {colors} = this.props;
        const {level} = this.state;
        const colorBox = colors[level].map(color => (
            <ColorBox key={color.id} name={color.name} color={color.rgb}/>
        ))
        return(
            <div className="Palette">
                <Navbar level={level} onSliderChange={this.onSliderChange} />                 
                <div className="Palette-colors">{colorBox}</div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallette;