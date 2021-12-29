import './App.css';
import React from 'react';
import GlobalsStyles from './globalStyles';
import { AppContext } from './context';
import useAppContext from './hooks/useAppContext';
import Layout from "./components/layout";
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Routes from "./components/routes";

const App = () => {
    const value  = useAppContext();

    return (
        <AppContext.Provider value={value}>
            <GlobalsStyles />
            <Router>
                <Layout />
                <Routes />
            </Router>
        </AppContext.Provider>
    )
};

export default App;
