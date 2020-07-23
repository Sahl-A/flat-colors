import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class SavePaletteForm extends Component {
    state = {
        open: false,
        paletteName: "",
    }

    componentDidMount() {
        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return this.props.palettes.every(palette => palette.paletteName.toLowerCase() !== value.toLowerCase())
        });
    };

   handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeForm = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

  render() {
      const { open, paletteName } = this.state;
      const { classes, onSavePalette } = this.props;
    return (
        <div>
          <Button style={{margin: '0 2rem 0 1rem'}} variant="contained" color="secondary" onClick={this.handleClickOpen}>
            Save
          </Button>
          <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
            <ValidatorForm
                style={{flexDirection: 'column', padding: '1.5rem'}}
                className={classes.form}
                ref="form" 
                onSubmit={() => onSavePalette(paletteName)}
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