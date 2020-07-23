import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move';
import SortableList from './SortableList';
import NewPaletteFormNav from './NewPaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 350;

const styles = (theme) => ({
  root: {
    display: 'flex',
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
  drawerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
  },
  drawerH1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '2.2rem',
  },
});

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20,
    }

    state = {
        open: true,
        colors: this.props.palettes[Math.floor(Math.random() * this.props.palettes.length)].colors,
        /* colors: [
            {color: #fff, name: black},
            {color: #f00, name: red}
        ], */
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    addNewColor = (newColor) => {
        this.setState( 
            {
                colors: [
                    ...this.state.colors,
                    newColor,
                    // {color: this.state.currColor, name: this.state.colorName}
                ],
                colorName: ""
            }
         );
    };

    handleSavePalette = (paletteName) => {
        const newPalette = {
            paletteName: paletteName,
            id: paletteName.toLowerCase().replace(/ /g, '-'),
            colors: this.state.colors
        };
        this.props.savePalette(newPalette);
        
        this.props.history.push('/')
    };

    handleDeleteColor = (id) => {
        this.setState({colors: this.state.colors.filter(color => color.name !== id)})
    };

    // Used to make the drag takes its effect
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    clearPaletteHandler = () => {
        this.setState({ colors: [] });
    };

    randomColorHandler = () => {
        // Get all the colors as one big single array
        const allColors = this.props.palettes.map(palette => palette.colors)
                           .reduce((res, curr) => res.concat(curr), []);
        // Generate a random color between 1 and the length of the allColors
        const randomNo = Math.floor(Math.random() * allColors.length-1);
        // Set the state with the random colors
        this.setState({ colors: [...this.state.colors, {color: allColors[randomNo].color, name: allColors[randomNo].name}] });
    };

    render() {
        const {classes, maxColors, palettes} = this.props;
        const { open, colors } = this.state;
        const isPaletteFull = colors.length >= maxColors;

        return(
            <div className={classes.root}>
                <CssBaseline />
                <NewPaletteFormNav 
                    open={open} 
                    onSavePalette={this.handleSavePalette}
                    onDrawerOpen={this.handleDrawerOpen}
                    palettes={palettes}
                />
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
                        <div className={classes.drawerContent}>
                            <div style={{marginBottom   : '2rem'}}>
                                <h1 className={classes.drawerH1} > Desing Your Palette </h1>
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    onClick={this.clearPaletteHandler}>
                                        Clear Palette
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={this.randomColorHandler}
                                    disabled={isPaletteFull} >
                                        Random Color
                                </Button>
                            </div>
                            <ColorPickerForm 
                                isPaletteFull={ isPaletteFull }
                                colors={colors}
                                addNewColor={this.addNewColor}
                            />
                        </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                    [classes.contentShift]: open,
                    })} >
                        <div className={classes.drawerHeader} />
                        <SortableList
                            colors={colors}
                            handleDeleteColor={this.handleDeleteColor}
                            axis={'xy'}
                            onSortEnd={this.onSortEnd}
                        />
                </main>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);