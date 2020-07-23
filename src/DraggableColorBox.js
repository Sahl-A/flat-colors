import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';


const DraggableColorBox = SortableElement((props) => {
    const {classes, color, colorName, deleteColor} = props;
    return(
        <div 
            className={classes.root}
            style={{backgroundColor: color}} > 
                <div className={classes.boxContent}>
                    <span style={{fontWeight: '300'}}>{colorName}</span>
                    <DeleteRounded onClick={deleteColor}/>
                </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);