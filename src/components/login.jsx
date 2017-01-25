// import react and components
import React, { Component } from 'react';
// import react router specifically withRouter
import ReactRouter, { withRouter }  from 'react-router';
// import firebase from firbase configuration
import firebase from '../../firebase.config.js';

// create a class for login and grab react
class Login extends Component {
// grab constructor from file
  constructor() {
// grab super from react
    super();
// set state as
    this.state = {
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
        .then(() => {
        this.props.router.push(`/dashboard/${username}`);
        });
      });
  }
// render all this new information
  render() {
// return it
    return (
// create div
      <div>
        <div className="enter">
          <div>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="username" onChange={this.handleChange}
            />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="password" onChange={this.handleChange}
            />
          </div>
          <button id="save" type="submit" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter (Login);

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
