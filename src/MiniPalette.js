import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import DeletePaletteDialog from './DeletePaletteDialog';

const MiniPalette = (props) => {
    const { classes, id, colors, emoji, deletePalette } = props;

    const [open, setOpen] = React.useState(false);

    const handleDeletePalette = (e) => {
        e.stopPropagation();
        setOpen(true);
    };

    
    const handleClose = (e) => {
        setOpen(false);
    };

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
            <div className={classes.deleteButton} >
                <Button color="secondary" onClick={handleDeletePalette}>
                    <DeleteIcon />
                </Button>
                {<DeletePaletteDialog deletePalette={() => deletePalette(id)} open={open} onClose={handleClose} />}
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);