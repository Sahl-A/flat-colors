import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
    state = {
        copiedColor: '',
        copied: false,
    }

    render() {
        const {name, color} = this.props;
        console.log(this.state.copiedColor)
        return(
            
                <div style={{background: `${color}`}} className="ColorBox">
                    <span className="ColorBox-name">{name}</span>
                    <span className="ColorBox-more">More</span>
                    <CopyToClipboard text={color} >
                        <span className="ColorBox-copy">Copy</span>
                    </CopyToClipboard>
                </div>
            
        )
    }
}

export default ColorBox;