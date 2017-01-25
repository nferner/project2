// connect to react to pull properties, specifically components
import React, { Component } from 'react';
// connect to firebase to register the new user with the database
import Router from 'react-router';
import firebase from '../../firebase.config.js';

// set up a class for register because it will need state to work (data being used and saved)
class Register extends Component {
// create constructor to use for register's properties
  constructor() {
// create super for react's properties
    super();
// will need to set state to grab info for registration
    this.state = {
// set username to empty string to be filled out later by new user
      username: '',
// set password to empty string to be filled out later by new user
      password: '',
    };
// will need a function to handle the change of state when new user changes username/password
    this.handleChange = this.handleChange.bind(this);
// will need a function to handle submitting the new information to the firebase databadse
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// create function to handle the change of state for user name and password
  handleChange(e) {
// create a new variable empty for the new 'string'(object) being inputted by the new user
    const stateObject = {};
// create a new variable to set the new username and password as keys for the new user
    const stateKey = e.target.name;
/* Set the value of the new username/password equal to the stateKey     which will be the Index
    which will now have an index which will be set as the new 'string' state object*/
    stateObject[stateKey] = e.target.value;
// set the new state as the new state object
    this.setState(stateObject);
  }
// create function to handle the submit button and transferring that information to fb
  handleSubmit() {
/* set variable which will take the new state of the username or password equal to the
    new entirety of the registrations state*/
    const { username, password } = this.state;
// call on firebase configuration information and have it use the authorization file
    firebase.auth()
/* have those use create a new user name and password with the new username and password passed
    through them*/
    .createUserWithEmailAndPassword(username, password)
// use .catch to catch if there is an error when submitted
    .catch((err) => {
// console log that error so we know what's up
      console.log(err);
    })
// then (promise) the new 'user'
    .then((user) => {
// call on firebase's database and reference all the 'users'
      firebase.database.ref('users')
// call on the use of child to create the new user with a user id (uid)
      .child(user.uid)
/* set th first name, last name to an empty string for now(need to add post function) and email
    as username*/
      .set({ firstName: '', lastName: '', email: username });
    })
    .then(() => {
      this.props.router.push(`/dashboard/${username}`);
    })
  }
// render the following to prep for the dom
  render() {
// return the following for render
    return (
// create div (large container) only one allowed
      <div>
        <div className="enter">
          <div>
            <input
              className="input"
              name="username"
              type="text"
              onChange={this.handleChange} placeholder="username"
            />
            <input
              className="input"
              name="password"
              type="password" onChange={this.handleChange} placeholder="password"
            />
          </div>
          <div>
            <input
              className="input"
              name="first"
              type="text"
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <input
              className="input"
              name="last"
              type="text"
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
          <button id="save" onClick={this.handleSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
// create another div with an id to style later
// create another div to hold each piece of information
// create an input box for new user to create username with their email
// close div
// create a new input box for the new user's password
// create new div
// close div
// create button to activate the event of submitting and saving the new username and password
// close div
// close div
