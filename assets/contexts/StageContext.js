import React, { Component, createContext } from 'react';
import axios from 'axios';

export const StageContext = createContext();

class StageContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: [],
            message: {},
        };
        this.readStage();
    }

    //create
    createStage(event, stage) {
        event.preventDefault();
        axios.post('/api/stage/create', stage)
            .then(response => {
                if (response.data.message.level === 'success') {
                    let data = [...this.state.stages];
                    data.push(response.data.stage);
                    this.setState( {
                        stages: data,
                        message: response.data.message,
                    });
                } else {
                    this.setState( {
                        message: response.data.message,
                    });
                }

        }).catch(error => {
            console.error(error);
        })
    }

    //read
    readStage() {
        axios.get('/api/stage/read')
            .then(response => {
                this.setState( {
                    stages: response.data,
                });
            }).catch(error => {
                console.error(error);
            })

    }

    //update
    updateStage(data) {
        axios.put('/api/stage/update/' + data.id, data)
            .then(response => {
                let stages = [...this.state.stages];
                let stage = stages.find(stage => {
                    return stage.id === data.id;
                });

                stage.name = data.name;

                this.setState( {
                    stages: stages,
                });
            }).catch(error => {
                console.error(error);
        })
    }
    
    //delete
    deleteStage(data) {
        axios.delete('/api/stage/delete/' + data.id)
            .then(response => {
                //message
                let stages = [...this.state.stages];
                let stage = stages.find(stage => {
                    return stage.id === data.id;
                });

                stages.splice(stages.indexOf(stage), 1);

                this.setState( {
                    stages: stage,
                });
            }).catch(error => {
                console.error(error);
            });
    }



    render() {
        return (
            <StageContext.Provider value= {{
                ...this.state,
                createStage: this.createStage.bind(this),
                updateStage: this.updateStage.bind(this),
                deleteStage: this.deleteStage.bind(this),
                setMessage: (message) => this.setState({message: message}),

            }}>
                {this.props.children}
            </StageContext.Provider>
        );
    }
}

export default StageContextProvider;