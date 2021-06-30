import { Button, Snackbar, SnackbarContent } from '@material-ui/core';
import { Context } from '@stimulus/core';
import React, { useContext } from 'react';
import { StageContext } from '../contexts/StageContext';

function AppSnackBar() {
    const context = useContext(StageContext);
    return (
        <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
            <SnackbarContent message={context.message.text} action={[
                <Button key='dismiss'>dismiss</Button>
            ]}/>
        </Snackbar>
    );
};

export default AppSnackBar;