import React, { Component } from 'react';

class ArtistSong extends Component {
  render() {
    return (
      <div>
        <input type="text" name="Artist" placeholder="Artist" />
        <input type="text" name="Song" placeholder="Song" />
        <button>Save</button>
      </div>
    );
  }
}

export default ArtistSong;
