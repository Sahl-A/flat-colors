import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import arrayMove from 'array-move';

import SortableList from './SortableList';
import NewPaletteFormNav from './NewPaletteFormNav';

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
    static defaultProps = {
        maxColors: 20,
    }

    state = {
        open: false,
        currColor: 'purple',
        colors: this.props.palettes[Math.floor(Math.random() * this.props.palettes.length)].colors,
        /* colors: [
            {color: #fff, name: black},
            {color: #f00, name: red}
        ], */
        colorName: ""
    };

    componentDidMount() {
        // custom rule will have name 'isColorNameUnique'
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            if(this.state.colors.length !==0) return this.state.colors.every(item => item.name !== value)
            return true
        });

        // custom rule will have name 'isColorUnique'
        ValidatorForm.addValidationRule('isColorUnique', value => {
            if(this.state.colors.length !==0) return this.state.colors.every(item => item.color !== this.state.currColor)
            return true
        });

        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return this.props.palettes.every(palette => palette.paletteName.toLowerCase() !== value.toLowerCase())
        });
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    changeColor = (newColor) => {
        this.setState({ currColor: newColor.hex });
    };

    addNewColor = () => {
        this.setState( 
            {
                colors: [
                    ...this.state.colors,
                    {color: this.state.currColor, name: this.state.colorName}
                ],
                colorName: ""
            }
         );
    };

    handleChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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
        console.log(this.props.palettes);
        // Get all the colors as one big single array
        const allColors = this.props.palettes.map(palette => palette.colors)
                           .reduce((res, curr) => res.concat(curr), []);
        // Generate a random color between 1 and the length of the allColors
        const randomNo = Math.floor(Math.random() * allColors.length-1);
        // Set the state with the random colors
        this.setState({ colors: [...this.state.colors, {color: allColors[randomNo].color, name: allColors[randomNo].name}] });
    };

    render() {
        const {classes, maxColors} = this.props;
        const { open, colors } = this.state;
        const ispaletteFull = colors.length >= maxColors;

        return(
            <div className={classes.root}>
            <CssBaseline />
            <NewPaletteFormNav 
                open={open} 
                classes= {classes}
                onSavePalette={this.handleSavePalette}
                onDrawerOpen={this.handleDrawerOpen}
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
                    <div>
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
                            disabled={ispaletteFull} >
                                Random Color
                        </Button>
                    </div>
                    <ChromePicker 
                        color={this.state.currColor}
                        onChangeComplete={ (newColor) => this.changeColor(newColor) } />

                    <ValidatorForm
                        ref="form"
                        onSubmit={this.addNewColor}
                        onError={errors => console.log(errors)}>

                            <TextValidator
                                label="Color Name"
                                onChange={this.handleChangeForm}
                                name="colorName"
                                value={this.state.colorName}
                                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                                errorMessages={['this field is required', 'Color name is used before', 'The Color is used before']}/>

                    
                            <Button 
                                variant="contained" 
                                color="primary" 
                                style={{backgroundColor: ispaletteFull ? '#aaa': this.state.currColor}}
                                type='submit'
                                disabled={ispaletteFull} >
                                {ispaletteFull ? 'Full Palette' : 'Add Color'}
                            </Button>
                    </ValidatorForm>
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