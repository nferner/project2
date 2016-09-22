import React, { Component } from 'react';
import ArtistSong from './artistSong.jsx';

class Playlist extends Component {
  render() {
    return (
      <div>
        <input type="text" name="playlistTitle" placeholder="Playlist Title" />
        <ArtistSong />
      </div>
    );
  }
}

export default Playlist;
