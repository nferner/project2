import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element,
};

const mainUrl = 'https://project-2-893b8.firebaseio.com/';

class Main extends Component {
// add constructor to pass props
  constructor(props) {
// add super and pass props
    super(props);
// this.state has the variable playlist equal to an empty object
    this.state = {
      playlist: {},
    }
  }

// add component did mount to retrieve the playlist when page is opened
  componentDidMount() {
// function for getting playlist goes here
    this.getPlaylist();
  }
// add 'get' request
  getPlaylist() {
// set the url as a variable 'const' call url or base url
/* need to use the 'request' from superagent to 'get' information from the url. pass the url
    through 'get'*/
    request.get(mainUrl)
/* use .then with 'response' from database passed through, fat arrow function cause its supposed to
        do something*/
    .then((response) => {
/* like get the playlist set playlist as variable and set it equal to the response use the
    .body method*/
      const playlist = response.body;
// now set the state equal to the palylist variable
      this.setSate = ({ playlist })
    });
  }

// need ability to 'post' information
  postPlaylist(data) {
// set url as const maybe now set the variable outside these functions to use
// use 'request' and 'post' to enter infor into database pass the url through
    request.post(mainUrl)
// use 'send' with the information passed through
    .send(data)
// use .then empty with fat arrow
    .then(() => {
// to get request the information which will render and set the state with the new addition
      this.getPlaylist();
    });
  }



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
