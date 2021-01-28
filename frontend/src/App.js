import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Root from './Root';
import {ToastContainer} from 'react-toastify'
import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000";



export default class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
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
