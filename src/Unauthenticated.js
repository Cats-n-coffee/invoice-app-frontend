import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default function Unauthenticated(props) {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={ LoginScreen }/>
                <Route path="/signup" component={ SignupScreen }/>
                <Route path="*" component={ () => <Redirect to="/login" /> }/>
            </Switch>
        </Router>
    )
}