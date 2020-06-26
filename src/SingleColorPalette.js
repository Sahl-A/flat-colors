import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    colors: {
        height: '90%',
    },
    SingleColorBox: {
        width: '20%',
        height: '50%',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-.4rem',
        textAlign: 'center',
    },
    goBackContainer: {
        backgroundColor: 'black',
        color: 'rgba(255, 255, 255, .8)',
    },
    goBack: {
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        transform: 'translate(-50%,50%)',
        textTransform: 'uppercase',
        background: 'rgba(255, 255, 255, .5)',
        height: '30px',
        width: '90px',
        lineHeight: '30px',
        transition: 'all .3s ease-in-out',
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, .8)'
    },
}

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
        // console.log(`SingleColorPalette ==>`, this._colorsArr, this._currColor, this.getShadedOfColor());
        const {colorFormat} = this.state;
        const {classes} = this.props;
        const colorBoxes = this.getShadedOfColor().map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                color={color[colorFormat]}
                isSingleColorBox />
        ))
        return(
            <div className={classes.Palette}>
                <Navbar colorFormatChange={this.colorFormatChange} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={`${classes.SingleColorBox} ${classes.goBackContainer}`}>
                        <Link to={`/palette/${this._currPalette}`} className={classes.goBack}>go Back</Link>
                    </div>
                </div>
                <Footer paletteName={this._currColor} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);