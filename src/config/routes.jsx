import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Dashboard from '../components/dashboard.jsx';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';


const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
}

export default Routes;
