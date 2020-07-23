import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class ColorPickerForm extends Component {
    state = {
        currColor: "teal",
        colorName: "",
    };

    componentDidMount() {
        // custom rule will have name 'isColorNameUnique'
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            if(this.props.colors.length !==0) return this.props.colors.every(item => item.name !== value)
            return true
        });

        // custom rule will have name 'isColorUnique'
        ValidatorForm.addValidationRule('isColorUnique', value => {
            if(this.props.colors.length !==0) return this.props.colors.every(item => item.color !== this.state.currColor)
            return true
        });
    };

    changeColor = (newColor) => {
        this.setState({ currColor: newColor.hex });
    };

    handleChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddNewColor = () => {

    }

    render() {
        const { isPaletteFull, addNewColor } = this.props;
        return(
            <React.Fragment>
                <ChromePicker 
                    color={this.state.currColor}
                    onChangeComplete={ (newColor) => this.changeColor(newColor) }
                />
                <ValidatorForm
                    ref="form"
                    onSubmit={() => addNewColor({color: this.state.currColor, name: this.state.colorName})}
                    onError={errors => console.log(errors)} 
                >
                        <TextValidator
                            label="Color Name"
                            onChange={this.handleChangeForm}
                            name="colorName"
                            value={this.state.colorName}
                            validators={['required', 'isColorNameUnique', 'isColorUnique']}
                            errorMessages={['this field is required', 'Color name is used before', 'The Color is used before']} 
                            variant="filled"
                            style={{marginTop: '1rem'}}
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{
                                backgroundColor: isPaletteFull ? '#aaa': this.state.currColor,
                                display: 'block',
                                width: '100%',
                                marginTop: '1rem',
                                padding: '.5rem 0',
                                fontSize: '1.4rem',
                            }}
                            type='submit'
                            disabled={isPaletteFull} >
                                {isPaletteFull ? 'Full Palette' : 'Add Color'}
                        </Button>
                </ValidatorForm>
            </React.Fragment>
        )
    }
}

export default ColorPickerForm;