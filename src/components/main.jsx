import React, { Component } from 'react';
import { Link } from 'react-router';
// going to need to add
const propTypes = {
  children: React.PropType.element,
};

class Main extends Component {
  const childrenGetMadProps = React.cloneElement(this.props.children);
  render() {
    return (
      <div>
        <h1>Testing</h1>
        <ul>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
        {childrenGetMadProps}
      </div>
    );
  }
}
Main.propTypes = propTypes;

export default Main;
