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
        <h1>Testing</h1>
        <ul>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
Main.propTypes = propTypes;

export default Main;
