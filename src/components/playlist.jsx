import React, { Component } from 'react';
import ArtistSong from './artistSong.jsx';

class Playlist extends Component {
  render() {
    return (
      <div>
        <h1>Placeholder for title</h1>
        <input id="playlist" type="text" name="playlistTitle" placeholder="Playlist Title" />
        <button>Save</button>
        <ArtistSong />
      </div>
    );
  }
}

export default Playlist;
