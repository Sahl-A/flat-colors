import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

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
        const {name, color, singleColorPaletteURL, colorsarr, showMore, classes} = this.props;
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
                    colorsarr={colorsarr}
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