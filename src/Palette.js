import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';
import ColorBox from './ColorBox';

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
                <Slider defaultValue={level} min={100} max={900} step={100} onChange={this.onSliderChange}/>

                {/* Nav bar goes here */}
                <div className="Palette-colors">{colorBox}</div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallette;