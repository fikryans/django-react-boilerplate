import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Root from './Root'



export default class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path="*">Ups</Route>
          </Switch>
        </Root>
      </div>
    )
  }
}
