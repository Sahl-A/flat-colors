import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
    ColorBox: {
        width: '20%',
        height: props => props.isSingleColorBox? '50%': '25%',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-.4rem',
        textAlign: 'center',
        color: props => chroma(props.color).luminance() >.5 ? 'black' : 'white',
        "&:hover button": {
            opacity: 1,
        }
    },
    ColorBoxMore: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        background: 'rgba(255, 255, 255, .5)',
        textTransform: 'uppercase',
        height: '30px',
        width: '70px',
        lineHeight: '30px',
        marginBottom: '.1rem',
        textDecoration: 'none',
        color: 'inherit',
    },
    ColorBoxName: {
        position: 'absolute',
        left: '10px',
        bottom: '10px',
        color: 'inherit',
        fontSize: '12px',
        display: 'block',
        letterSpacing: '1px',
    },
    ColorBoxCopy: {
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        transform: 'translate(-50%,50%)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, .5)',
        height: '30px',
        width: '90px',
        lineHeight: '30px',
        opacity: '0',
        transition: 'all .3s ease-in-out',
        border: 'none',
        fontSize: 'inherit',
        color: 'inherit',
        "&:focus": {
            border: 'none',
            outline: 'none',
        },
        "&:active ": {
            border: 'none',
            outline: 'none',
        },
    },
    copyMsg: {
        opacity: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(.5)',
        zIndex: '-1',
        color: 'inherit',
        '& h1': {
            textShadow: '1px 2px rgba(255,255,255,.2)',
            background: 'rgba(255,255,255,.2)',
            padding: '20px 0',
            width: '100%',
            textAlign: 'center',
            marginBottom: '-.5rem',
            border: '1px solid rgba(255,255,255,.1)',
        },
    },
    showMsg: {
        opacity: 1,
        zIndex: 20,
        transform: 'scale(2)',
        transition: 'all .3s ease-in-out',
        transitionDelay: '.2s',
    },
    copyOverlay: {
        width: '100%',
        height: '100%',
        opacity: 0,
        transition: 'transform 1s',
        transform: 'scale(.5)',
    },
    showOverlay: {
        opacity: 1,
        transform: 'scale(10)',
        zIndex: 10,
        position: 'absolute',
    },
  };

class ColorBox extends Component {
    state = {
        copied: false,
    }

    clipBoardCopy = () => {
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copied: false})
        }, 1000);
    }

    render() {
        // console.log(`[ColorBox] props ==>`, this.props)
        const {name, color, singleColorPaletteURL, colorsArr, showMore, classes} = this.props;
        const {copied} = this.state;
        return(
            <div style={{background: color}} className={classes.ColorBox}>
                <div style={{background: color}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
                <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                    <h1>Copied!</h1>
                    <p>{color}</p>
                </div>
                <span className={classes.ColorBoxName}>{name}</span>
                { showMore && <Link 
                    className={classes.ColorBoxMore}
                    colorsArr={colorsArr}
                    to={`${singleColorPaletteURL}`} >
                        More
                </Link>}
                <CopyToClipboard text={color} onCopy={this.clipBoardCopy}>
                    <button className={classes.ColorBoxCopy}>Copy</button>
                </CopyToClipboard>
            </div>
        )
    }
}

export default withStyles(styles)(ColorBox);