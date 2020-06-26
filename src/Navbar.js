import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        const {level, onSliderChange, showSlider, classes} = this.props;
        return(
            <nav className={classes.Navbar}>
                <Link to="/" className={classes.NavbarTitle}>reactcolorpicker</Link>
                {showSlider && <div className={classes.Slider}>
                    <p>level: {level}</p>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100} 
                        onChange={onSliderChange}/>
                </div>}
                <div className={classes.selectContainer}>
                    <Select 
                        className={classes.selectItem}
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

export default withStyles(styles)(Navbar);