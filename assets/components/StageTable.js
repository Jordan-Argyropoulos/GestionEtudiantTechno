import React, { Component, useContext } from 'react';
import { StageContext } from '../contexts/StageContext';

function StageTable() {
    const context = useContext(StageContext);
        return (
            <div>
                {context.stages.map(stage =>(
                    <div>{stage.task}</div>
                ))}
            </div>
        );
}


export default StageTable;