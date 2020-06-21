import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        console.log(`[ColorBox] props ==>`, this.props)
        const {name, color, singleColorPaletteURL} = this.props;
        const {copied} = this.state;
        return(
            <div style={{background: `${color}`}} className="ColorBox">
                <div style={{background: `${color}`}} className={`copy-overlay ${copied && 'show'}`}></div>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{color}</p>
                </div>
                <span className="ColorBox-name">{name}</span>
                <Link 
                    className="ColorBox-more"
                    to={`${singleColorPaletteURL}`} >
                        More
                </Link>
                <CopyToClipboard text={color} onCopy={this.clipBoardCopy}>
                    <span className="ColorBox-copy">Copy</span>
                </CopyToClipboard>
            </div>
        )
    }
}

export default ColorBox;