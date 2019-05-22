import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Example2 from './Example2';

const routing = (
  <Router>
    <Switch>
      <Redirect from="/" to="/example1" exact />
      <Route path="/example1" component={App} exact/>
      <Route path="/example2" component={ Example2 } />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
