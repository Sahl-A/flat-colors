import React, { Component } from 'react';
// Import from rc slider library
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import css after the library to override its styles
import './Navbar.css';
// select imports from material ui
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// snack bar imports from material ui
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import route Links
import { Link } from 'react-router-dom';


class Navbar extends Component {

    state = {
        colorFormat: 'hex',
        snackBarOpen: false,
    }

    // Event Handlers
    // select event handler on change
    handleChange = (e) => {
        this.setState({
            colorFormat: e.target.value,
            snackBarOpen: true,
        });
        this.props.colorFormatChange(e.target.value);
    }

    closeSnackBarHandle = () => {
        this.setState({snackBarOpen: false})
    }

    render() {
        const {level, onSliderChange, showSlider} = this.props;
        return(
            <nav className="Navbar">
                <Link to="/" className="Navbar-title">reactcolorpicker</Link>
                {showSlider && <div className="Slider">
                    <p>level: {level}</p>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100} 
                        onChange={onSliderChange}/>
                </div>}
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
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={2000}
                    onClose={this.closeSnackBarHandle}
                    message="Color format has been changed succesfully!!"
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackBarHandle}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </nav>
        )
    }
}

export default Navbar;