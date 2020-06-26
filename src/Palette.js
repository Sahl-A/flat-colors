// To be done ==> redirect when accessing unavailable palette
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './styles/PaletteStyles';

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
        const {colors, paletteName, emoji, id, classes} = this.props;
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
            <div className={classes.Palette}>
                <Navbar 
                    level={level} 
                    onSliderChange={this.onSliderChange}
                    colorFormatChange={this.colorFormatChange}
                    showSlider />     

                <div className={classes.colors}>{colorBox}</div>
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Pallette);