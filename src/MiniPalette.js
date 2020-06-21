import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: "100%",
        background: "white",
        borderRadius: '5px',
        padding: '.7rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    miniColorBoxes: {
        marginBottom: '.3rem',
        height: '90%',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    miniBox: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.25rem'

    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '.2rem 0'
        
    }
  };

const MiniPalette = (props) => {
    const { classes, id, colors, emoji } = props;
    const colorBox = colors.map(color => (
        <div key={color.color} style={{background: `${color.color}`}} className={classes.miniBox}></div>
    ))
    return(
        <div className={classes.root}>
            <div className={classes.miniColorBoxes}>
                {colorBox}
            </div>
            <footer className={classes.footer}>
                <span>{id}</span>
                <span>{emoji}</span>
            </footer>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);