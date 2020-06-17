import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {

    render() {
        const {name, color} = this.props;

        return(
            <React.Fragment>
                <div style={{background: `${color}`}} className="ColorBox">
                    <span className="ColorBox-name">{name}</span>
                    <span className="ColorBox-more">More</span>
                    <span className="ColorBox-copy">Copy</span>
                </div>
            </React.Fragment>
        )
    }
}

export default ColorBox;