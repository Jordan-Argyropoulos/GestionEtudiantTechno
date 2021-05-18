import React, { Component, createContext } from 'react';

export const StageContext = createContext();

class StageContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stages: [{task: 'do something'}],
        };
        
    }

    //create
    createStage() {

    }

    //read
    readStage() {

    }

    //update
    updateStage() {

    }
    
    //delete
    deleteStage() {

    }



    render() {
        return (
            <StageContext.Provider value= {{
                ...this.state,
                createStage: this.createStage.bind(this),
                updateStage: this.updateStage.bind(this),
                deleteStage: this.deleteStage.bind(this),

            }}>
                {this.props.children}
            </StageContext.Provider>
        );
    }
}

export default StageContextProvider;