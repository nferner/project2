// import react and components
import React, { Component } from 'react';
// import react router specifically withRouter
import { withRouter } from 'react-router';
// import firebase from firbase configuration
import firebase from '../../firebase.config.js'

// create a class for login and grab react
class Login extends Component {
// grab constructor from file
  constructor() {
// grab super from react
    super();
// set state as
    this.setState = {
// set user name as empty string
      username: '',
// set password as empty string
      password: '',
    };
  }
}
// bind future use of handlechange
this.handleChange = this.handleChange.bind(this);
// bind future use of handleSubmit
this.handleSubmit = this.handleSubmit.bind(this);

// create handleChange of username and password function
handleChange(e) {
// create a stateObject that empty
  const stateObject = {};
// create a stateKey that will grab the name from the event
  const stateKey = e.target.name;
// set stateObject with the stateKey equal to the value of the target
  stateObject[stateKey] = e.target.value;
// pass the new stateObject through set the state of the login
  this.setState(stateObject);
}


// create handleSubmit function
// set variable of username and password equal to the newly changed state
// call firebase supported by authorization
// use firebases method of signInWithEmailAndPassword and pass through the inputted pword and user
// use catch method if there is an error, pass the error through
// set variable of errorCode equal to the err.code
// set variable errorMessage equal to err.message;
// console log that err
// then push the new propertis through the router method to the dashboard file

// render all this new information
// return it
// create div
// create div with id for styling
// create div hold/separate inputs
// create input for username and onChange utilize handleChange
// close div
// create div
// create input for pword and onchange utilize handleChange
// close div
// create button and on click use submit finction
// close div
// close div

// export login
