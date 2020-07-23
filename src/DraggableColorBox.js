import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.4rem',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all .3s ease-out',
        "&:hover": {
            boxShadow: '0 0 20px 10px rgba(0,0,0,.2)',
        },
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.5)',
            cursor: 'pointer',
        },
    },
    boxContent: {
        position: 'absolute',
        bottom: '5px',
        width: '100%',
        paddingLeft: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        "& svg": {
            transition: 'all .5s',
        }
    },
};


const DraggableColorBox = SortableElement((props) => {
    const {classes, color, colorName, deleteColor} = props;
    return(
        <div 
            className={classes.root}
            style={{backgroundColor: color}} > 
                <div className={classes.boxContent}>
                    <span>{colorName}</span>
                    <DeleteRounded onClick={deleteColor}/>
                </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);