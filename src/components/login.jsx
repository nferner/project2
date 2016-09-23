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
// bind future use of handlechange
    this.handleChange = this.handleChange.bind(this);
// bind future use of handleSubmit
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
  handleSubmit() {
// set variable of username and password equal to the newly changed state
    const { username, password } = this.state;
// call firebase supported by authorization
    firebase.auth()
// use firebases method of signInWithEmailAndPassword and pass through the inputted pword and user
    .signInWithEmailAndPassword(username, password)
// use catch method if there is an error, pass the error through
    .catch((err) => {
// set variable of errorCode equal to the err.code
      const errorCode = err.code;
// set variable errorMessage equal to err.message;
      const errorMessage = err.message
// console log that err
      console.log(err)
    });
// then push the new propertis through the router method to the dashboard file
    .then.router.push('/dashboard.jsx')
  }
// render all this new information
  render() {
// return it
    return (
// create div
      <div>
// create div with id for styling
        <div id="login_view">
// create div hold/separate inputs
          <div>
// create input for username and onChange utilize handleChange
            <input name="username" type="text" placeholder="username" onChange={handleChange} />
// close div
          </div>
// create div
          <div>
// create input for pword and onchange utilize handleChange
            <input name="password" type="password" placeholder="password" onChange={handleChange} />
// close div
          </div>
// create button and on click use submit finction
          <button type="submit" onClick={handleSubmit}>Login</button>
// close div
        </div>
// close div
      </div>
    );
  }
}

export default withRouter (Login);
