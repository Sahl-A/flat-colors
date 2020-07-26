import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

function DeletePaletteDialog(props) {
  const { onClose, open, deletePalette } = props;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleDeletePalette = (e) => {
    e.stopPropagation();
    deletePalette()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Delete this palette?</DialogTitle>
      <List>
        <ListItem autoFocus button onClick={handleDeletePalette}>
          <ListItemAvatar>
              <CheckCircleTwoToneIcon style={{color: green[500], fontSize: '2rem'}}/>
          </ListItemAvatar>
          <ListItemText primary="Delete" />
        </ListItem>
        <ListItem autoFocus button onClick={handleClose}>
          <ListItemAvatar>
              <HighlightOffIcon style={{color: red[500], fontSize: '2rem'}}/>
          </ListItemAvatar>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </Dialog>
  );
}

DeletePaletteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DeletePaletteDialog;