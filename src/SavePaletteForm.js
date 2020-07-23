import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class SavePaletteForm extends Component {
    state = {
        open: '',
        paletteName: "",
    }

    componentDidMount() {
        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return this.props.palettes.every(palette => palette.paletteName.toLowerCase() !== value.toLowerCase())
        });
    };

   handleClickOpen = () => {
    this.setState({ open: "paletteName" });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeForm = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

// When click on save palette button
onSubmitForm = () => {
    // To open the emoji dialog and close the form dialog
    this.setState({open: 'emoji'});
};

// When picking up an emoji
addPaletteData = (data) => {
    const paletteData = {name: this.state.paletteName, emoji: data.native}
    // Save Palette with paletteName and emoji
    this.props.onSavePalette(paletteData)
}

  render() {
    const { open, paletteName } = this.state;
    const { classes } = this.props;
    return (
        <div>
          <Button style={{margin: '0 2rem 0 1rem'}} variant="contained" color="primary" onClick={this.handleClickOpen}>
            Save
          </Button>
          <Dialog open={open === 'emoji'} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <Picker 
                set='apple'
                onSelect={this.addPaletteData}
                title='Pick the palette emoji' emoji='point_up' />
          </Dialog>
          <Dialog open={open === 'paletteName'} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
            <ValidatorForm
                style={{flexDirection: 'column', padding: '1.5rem'}}
                className={classes.form}
                ref="form" 
                onSubmit={this.onSubmitForm}
                onError={errors => console.log(errors)}
            >
                <DialogContentText>
                        Please enter a name for your new beautiful palette. Make sure it's unique!
                </DialogContentText>
                <TextValidator
                    style={{alignSelf: 'stretch'}}
                    label="Palette Name"
                    onChange={this.handleChangeForm}
                    name="paletteName"
                    value={paletteName}
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['this field is required', 'Palette name is used before']} 
                    fullWidth
                    margin="dense"
                />
                <div style={{
                    alignSelf: 'flex-end',
                    marginTop: '2rem'
                }}> 
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" type="submit" color="primary">
                        Save Palette
                    </Button>
                </div>
            </ValidatorForm>
          </Dialog>
        </div>
    );
  }
}

export default  SavePaletteForm;