import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: '5vh',
        display: 'flex',
        justifyItems: 'center',
        justifyContent: 'flex-end',
    },
    emoji: {
        margin: '0 2rem 0 2rem',
    }
  };

const Footer = (props) => {
    const {paletteName, emoji, classes} = props;
    return(
        <footer className={classes.root}>
            <span >{paletteName}</span>
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(Footer);