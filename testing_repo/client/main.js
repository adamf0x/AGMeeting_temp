import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

import {ThemeProvider, createTheme} from "@mui/material";
// import "./styles.scss";

const theme = createTheme({
    palette:{
        primary:{
            main: "#231651"
        }
    }
})

const routes = (
    <Router>
        <Switch>
            <ThemeProvider theme={theme}>
                <Route exact path="/" component={App} />
            </ThemeProvider>
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById("root"));