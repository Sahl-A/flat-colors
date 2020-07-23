import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import SavePaletteForm from './SavePaletteForm';
import styles from './styles/NewPaletteFormNavStyles';

class NewPaletteFormNav extends Component {
    render() {
        const {open, classes, onSavePalette, onDrawerOpen, palettes} = this.props;
        return(
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}>
                        <Toolbar >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerOpen}
                                edge="start"
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                            <MenuIcon />
                            </IconButton>
                            <h2>Create A Palette</h2>
                        </Toolbar>
                        <Link to="/" style={{marginLeft: 'auto'}}>
                            <Button
                                variant="contained" 
                                color="secondary" 
                            >
                                    Go Back
                            </Button>
                        </Link>
                        <SavePaletteForm 
                            classes={classes}
                            onSavePalette={onSavePalette}
                            palettes={palettes}
                        />
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(NewPaletteFormNav);