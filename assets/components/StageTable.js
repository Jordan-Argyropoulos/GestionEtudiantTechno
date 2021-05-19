import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Component, useContext } from 'react';
import { StageContext } from '../contexts/StageContext';

function StageTable() {
    const context = useContext(StageContext);

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Etudiant</TableCell>
                        <TableCell>Entreprise</TableCell>
                        <TableCell>Adresse</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField id="standard-basic" label="Etudiant"/>
                            </TableCell>
                            <TableCell>
                                <TextField id="standard-basic" label="Entreprise"/>
                            </TableCell>
                            <TableCell>
                                <TextField id="standard-basic" label="Adresse"/>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <AddIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        {context.stages.map(stage => (
                        <TableRow>
                            <TableCell>{stage.name}</TableCell>          
                            <TableCell></TableCell>          
                            <TableCell></TableCell>          
                            <TableCell align="right">
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                            </TableCell>              
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
}


export default StageTable;