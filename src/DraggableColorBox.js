import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteRounded from '@material-ui/icons/DeleteRounded';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.4rem',
        position: 'relative',
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.5)',
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


const DraggableColorBox = (props) => {
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
}

export default withStyles(styles)(DraggableColorBox);