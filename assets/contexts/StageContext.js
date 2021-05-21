import React, { Component, createContext } from 'react';

export const StageContext = createContext();

class StageContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stages: [
                {id: 1, name: 'do something'},
                {id: 2, name: 'do something'},
                {id: 3, name: 'do something'},
                {id: 4, name: 'do something'},
                {id: 5, name: 'do something'},
            ],
        };
        
    }

    //create
    createStage(event, stage) {
        event.preventDefault();
        let data = [...this.state.stages];
        data.push(stage);
        this.setState( {
            stages: data,
        })
    }

    //read
    readStage() {

    }

    //update
    updateStage(data) {
        let stages = [...this.state.stages];
        let stage = stages.find(stage => {
            return stage.id === data.id;
        })

        stage.name = data.name;

        this.setState( {
            stages: stages,
        })
    }
    
    //delete
    deleteStage(data) {
        let stages = [...this.state.stages];
        let stage = stages.find(stage => {
            return stage.id === data.id;
        });

        stages.splice(stages.indexOf(stage), 1);

        this.setState( {
            stages: stages,
        });

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