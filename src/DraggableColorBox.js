import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.4rem',
    }
};


const DraggableColorBox = (props) => {

    return(
        <div 
            className={props.classes.root}
            style={{backgroundColor: props.color}} > {props.colorName} 
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);