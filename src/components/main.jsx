import React, { Component } from 'react';
import { Link } from 'react-router';
// add superagent for get requests

const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
// add constructor to pass props
// add super and pass props
// this.state has the variable playlist equal to an empty object
// add component did mount to retrieve the playlist when page is opened
// function for getting playlist goes here

// add 'get' request
// set the url as a variable 'const' call url or base url
/* need to use the 'request' from superagent to 'get' information from the url. pass the url
    through 'get'*/
/* use .then with 'response' from database passed through, fat arrow function cause its supposed to
    do something*/
/* like get the playlist set playlist as variable and set it equal to the response use the
    .body method*/
// now set the state equal to the palylist variable

// need ability to 'post' information
// set url as const maybe now set the variable outside these functions to use
// use 'request' and 'post' to enter infor into database pass the url through
// use 'send' with the information passed through
// use .then empty with fat arrow
// to get request the information which will render and set the state with the new addition

// need ability to edit 'push' information

// need ability to delete 'del' information


  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
Main.propTypes = propTypes;

export default Main;
