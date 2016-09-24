import React, { Component } from 'react';

class ArtistSong extends Component {

  render() {
    return (
      <div>
        <input id="artist" type="text" name="Artist" placeholder="Artist" />
        <input id="song" type="text" name="Song" placeholder="Song" />
        <button>Save</button>
      </div>
    );
  }
}

export default ArtistSong;
