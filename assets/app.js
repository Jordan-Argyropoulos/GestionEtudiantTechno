/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StageTable from './components/StageTable';
import StageContextProvider from './contexts/StageContext';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <StageContextProvider>
                <CssBaseline>
                <StageTable></StageTable>
                </CssBaseline>
            </StageContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));