import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class NewPaletteFormNav extends Component {

    state = {
        paletteName: ""
    };

    componentDidMount() {
        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return this.props.palettes.every(palette => palette.paletteName.toLowerCase() !== value.toLowerCase())
        });
    };

    handleChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const {open, classes, onSavePalette, onDrawerOpen} = this.props;
        const { paletteName } = this.state;
        return(
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerOpen}
                                edge="start"
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                            <MenuIcon />
                            </IconButton>
                            <h1>Persistent Drawer</h1>
                            <ValidatorForm
                                ref="form" 
                                onSubmit={() => onSavePalette(paletteName)}
                                onError={errors => console.log(errors)}>

                                    <TextValidator
                                        label="Palette Name"
                                        onChange={this.handleChangeForm}
                                        name="paletteName"
                                        value={this.state.paletteName}
                                        validators={['required', 'isPaletteNameUnique']}
                                        errorMessages={['this field is required', 'Palette name is used before']} 
                                    />
                                    <Link to="/">
                                        <Button
                                            variant="contained" 
                                            color="secondary" 
                                        >
                                                Go Back
                                        </Button>
                                    </Link>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        type='submit' >
                                         Save Palette
                                    </Button>
                            </ValidatorForm>
                        </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NewPaletteFormNav;