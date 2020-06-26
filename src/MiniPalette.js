import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';


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