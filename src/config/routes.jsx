import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Playlist from '../components/playlist.jsx';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home} />
        <Route path="playlist" component={Playlist} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
}

export default Routes;
