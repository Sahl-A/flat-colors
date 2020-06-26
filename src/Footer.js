import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';


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