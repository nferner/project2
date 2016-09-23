import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Playlist from '../components/playlist.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home} />
        <Route path="playlist" component={Playlist} />
      </Route>
    </Router>
  );
}

export default Routes;
