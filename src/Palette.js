// To be done ==> redirect when accessing unavailable palette
import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';


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
        console.log(`[Palette] props ==>`, this.props)
        const {colors, paletteName, emoji, id} = this.props;
        const {level, colorFormat} = this.state;
        const colorBox = colors[level].map(color => (
            <ColorBox 
                key={color.id} 
                name={color.name} 
                color={color[colorFormat]}
                colorsArr={colors}
                showMore
                isSingleColorBox={false}
                singleColorPaletteURL={`/palette/${id}/${color.name.split(' ')[0]}`} />
        ))
        return(
            <div className="Palette">
                <Navbar 
                    level={level} 
                    onSliderChange={this.onSliderChange}
                    colorFormatChange={this.colorFormatChange}
                    showSlider />     

                <div className="Palette-colors">{colorBox}</div>
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default Pallette;