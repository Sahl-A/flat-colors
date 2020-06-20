import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
      height: "100%",
      background: "white",
      borderRadius: '5px',
    },
  };

const MiniPalette = (props) => {
    const { classes } = props;
    
    return(
        <div className={classes.root}>

        </div>
    )
}

export default withStyles(styles)(MiniPalette);