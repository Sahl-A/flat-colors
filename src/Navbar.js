import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';


class Navbar extends Component {

    render() {
        const {level, onSliderChange} = this.props;
        return(
            <nav className="Navbar">
                <a href="/" className="Navbar-title">reactcolorpicker</a>
                <div className="Slider">
                    <p>level: {level}</p>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100} 
                        onChange={onSliderChange}/>
                </div>
            </nav>
        )
    }
}

export default Navbar;