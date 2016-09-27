const React = require('react'),
  firebase = require ('../../firbase.config.jsx'),

function requireAuth(nextState, replace) {
  if (firbase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname},
    });
  }
}

module.exports = requireAuth;
