import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

// select imports from material ui
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



class Navbar extends Component {

    state = {
        colorFormat: 'hex',
    }

    // Event Handlers
    // select event handler on change
    handleChange = (e) => {
        this.setState({colorFormat: e.target.value});
        this.props.colorFormatChange(e.target.value);
    }

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
                <div className="select-container">
                    <Select 
                        className="select-item"
                        onChange={this.handleChange}
                        value={this.state.colorFormat} >

                            <MenuItem value={`hex`}>Hex #FFF</MenuItem>
                            <MenuItem value={'rgb'}>rgb(255,255,255)</MenuItem>
                            <MenuItem value={'rgba'}>rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>
            </nav>
        )
    }
}

export default Navbar;