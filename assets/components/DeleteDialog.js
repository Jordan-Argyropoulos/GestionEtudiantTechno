import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types'
import React, { Component, useContext } from 'react';
import { StageContext } from '../contexts/StageContext';

function DeleteDialog(props) {
    const hide = () => {
        props.setDeleteConfirmationIsShown(false);

    };

    const context = useContext(StageContext)
        return (
            <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
                <DialogTitle>Are you sure you wish to delete this ?</DialogTitle>
                <DialogContent>
                    {props.stage.name}
                </DialogContent>
                <DialogActions>
                    <Button onClick={hide}>Cancel</Button>
                    <Button onClick={() => {
                        context.deleteStage({id: props.stage.id, name: props.stage.name});
                        hide()
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
}

DeleteDialog.PropTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    stage: PropTypes.object,
};
export default DeleteDialog;