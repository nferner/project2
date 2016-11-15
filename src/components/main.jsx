import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element,
};

const mainUrl = 'https://project-2-893b8.firebaseio.com/playlist.json';

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

// need ability to delete 'del' information pass unique identifier for information (id)
  deletePlaylist(id) {
// creat variable for the url/id we are deleting need to id the id
    const url = `https://project-2-893b8.firebaseio.com/playlist/${id}.json`;
// 'request' to delete (del) the id'd url (pass url through)
    request.del(url)
// .then we get the playlist again
    .then(() => {
      this.getPlaylist();
    });
  }
  render() {
    return (
      <div>
        <nav id="links">
          <Link to="dashboard">Dashboard</Link>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
Main.propTypes = propTypes;

export default Main;
