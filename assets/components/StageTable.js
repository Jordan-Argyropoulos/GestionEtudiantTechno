import { IconButton, InputAdornment, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Component, Fragment, useContext, useState } from 'react';
import { StageContext } from '../contexts/StageContext';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import DeleteDialog from './DeleteDialog';

function StageTable() {
    const context = useContext(StageContext);
    const [addStage, setAddStage] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editStage, setEditStage] = useState('');
    const [DeleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [stageToBeDeleted, setToStageToBeDeleted] = useState(null);

        return (
            <Fragment>
                <form onSubmit={(event) => {
                    context.createStage(event, {name: addStage})}}>
                <Table>
                    <TableHead>
                        <TableRow>                      
                            <TableCell>Numéro</TableCell>
                            <TableCell>Descriptif</TableCell>
                            <TableCell>Date début</TableCell>
                            <TableCell>Date fin</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TextField value={addStage} onChange={() => {setAddStage(event.target.value)}} id="standard-basic" label="ajouter descriptif du stage"/>
                                </TableCell>
                                <TableCell>
                                    <TextField id="standard-basic" label="ajouter une date de début"/>
                                </TableCell>
                                <TableCell>
                                    <TextField id="standard-basic" label="ajouter une date de fin"/>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton type="submit">
                                        <AddIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            {context.stages.slice().reverse().map((stage, index) => (
                            <TableRow key={'stage ' + index}>
                                <TableCell>
                                    {editIsShown === stage.id ?
                                        <TextField 
                                            value={editStage} 
                                            onChange={(event) => {
                                                setEditStage(event.target.value);
                                        }}
                                        InputProps={{
                                            endAdornment: <Fragment>
                                                <IconButton onClick={() => {setEditIsShown(false);
                                                }}><CloseIcon/></IconButton>
                                                <IconButton onClick={() => {
                                                    context.updateStage({id: stage.id, name: editStage});
                                                    setEditIsShown(false);
                                            }}><DoneIcon/></IconButton>
                                                </Fragment>,
                                        }}
                                        />
                                                    :
                                        stage.name
                                    }


                                </TableCell>          
                                <TableCell>{stage.name}</TableCell> 
                                <TableCell align="right">

                                <IconButton onClick={() => {setEditIsShown(stage.id); setEditStage(stage.name)}}>
                                    <EditIcon/>
                                </IconButton>

                                <IconButton onClick={() => {setDeleteConfirmationIsShown(true); setToStageToBeDeleted(stage)}}>
                                    <DeleteIcon/>
                                </IconButton>

                                </TableCell>              
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>

            {DeleteConfirmationIsShown && (
            <DeleteDialog stage={stageToBeDeleted}
                        open={DeleteConfirmationIsShown}
                        setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}
            
            />
            )}



        </Fragment>
        );
}


export default StageTable;