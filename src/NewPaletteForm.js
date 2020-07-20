import React, { Component } from 'react';
import classNames from "classnames";
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';

import DraggableColorBox from './DraggableColorBox';

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
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 36px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
    state = {
        open: false,
        currColor: 'purple',
        colors: ['purple', '#f4561f']
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    }

    handleDrawerClose = () => {
        this.setState({open: false});
    }

    changeColor = (newColor) => {
        this.setState({ currColor: newColor.hex });
    };

    addNewColor = () => {
        this.setState({ colors: [...this.state.colors, this.state.currColor] });
        console.log(this.state.colors)
    }

    render() {
        const {classes} = this.props;
        const { open, colors } = this.state;

        return(
            <div className={classes.root}>
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
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <h1>Persistent Drawer</h1>
                    </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                             <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div>
                        <Button variant="contained" color="secondary">
                            Create Palette
                        </Button>
                        <Button variant="contained" color="primary">
                            Random Color
                        </Button>
                    </div>
                    <ChromePicker 
                        color={this.state.currColor}
                        onChangeComplete={ (newColor) => this.changeColor(newColor) } />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{backgroundColor: this.state.currColor}}
                        onClick={this.addNewColor} >
                        Add Color
                    </Button>
            </Drawer>
            <main
                className={classNames(classes.content, {
                [classes.contentShift]: open,
                })} >
                    <div className={classes.drawerHeader} />
                    {colors.map(color => <DraggableColorBox color={color} />)}
            </main>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);