import React from "react";
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Home from "../../pages/home/home";
import Houses from "../../pages/houses/houses";
import House from "../../pages/house/house";
import Characters from "../../pages/characters/characters";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/houses'>
                <Houses/>
            </Route>
            <Route exact path='/house/:id'>
                <House/>
            </Route>
            <Route exact path='/characters'>
                <Characters/>
            </Route>
            <Redirect to='/home' />
        </Switch>
    );
};

export default Routes;
