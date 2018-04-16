import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch

} from 'react-router-dom';

import App from '../App';
import Home from '../components/Home';
import Film from '../components/Film';
import Cart from '../components/Cart';
import Sort from '../components/Sort';
import Detal from '../components/Detal';
import Login from '../Login';
import React from "react";
import Top from '../Top'
const router=(
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/film/:id" exact component={Film}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/sort" component={Sort}/>
                <Route path="/detal" component={Detal}/>
                <Route path="/top" component={Top}/>
                <Redirect from="*" to="/home"/>
            </Switch>
        </App>
    </Router>)

export default router