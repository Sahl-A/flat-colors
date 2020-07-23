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


const drawerWidth = 300;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }), 
  },
  toolBar: {
      display: 'flex',
      alignItems: 'center',
  },
  form: {
      display: 'flex',
      alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    
  },
});

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