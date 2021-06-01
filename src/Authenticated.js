import React from 'react';
import PortalScreen from './screens/PortalScreen';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function Authenticated(props) {
    return (
        <Router>
            <Switch>
                <Route path="/portal" component={ PortalScreen } />
                <Route path="*" component={ () => <Redirect to="/portal" /> } />
            </Switch>
        </Router>
    )
}