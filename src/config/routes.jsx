import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from '../../components/main.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
}

export default Routes;
