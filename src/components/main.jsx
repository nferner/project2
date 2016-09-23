import React, { Component } from 'react';
import { Link } from 'react-router';
// going to need to add
const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
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
