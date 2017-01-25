import React from 'react';
import ArtistSong from './artistSong.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class Playlist extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <li className="listItem" key={idx}>
          <ArtistSong
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            artist={post.artist}
            song={post.song}
            id={post.id}
          />
        </li>
      );
    });
    return (
      <ul id="playlist">
        {postElements}
      </ul>
    );
  }
}

Playlist.propTypes = propTypes;

export default Playlist;
