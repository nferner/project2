import React from 'react';

const propTypes = {
  song: React.PropTypes.string,
  artist: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
};

class ArtistSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localArtist: this.props.artist || '',
      localSong: this.props.song || '',
    };
    this.editArtist = this.editArtist.bind(this);
    this.editSong = this.editSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localArtist: nextProps.artist || '',
      localSong: nextProps.song || '',
    });
  }
  editArtist(e) {
    const newArtist = e.target.value;
    this.setState({
      localArtist: newArtist,
    });
  }
  editSong(e) {
    const newSong = e.target.value;
    this.setState({
      localSong: newSong,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      artist: this.state.localArtist,
      song: this.state.localSong,
    });
    this.setState({ saved: true });
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.artist === this.state.localArtist &&
          this.props.song === this.state.localSong;
  }
  render() {
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <form className="post-display" onSubmit={this.handleSubmit}>
          <input id="artist"
            type="text"
            name="artist"
            value={this.state.localArtist}
            onChange={this.editArtist} placeholder="Artist"
          />
          <input id="song"
            type="text"
            name="song"
            value={this.state.localSong}
            onChange={this.editSong} placeholder="Song"
          />
          <input
            type="submit"
            value="SAVE"
          />
          <button onClick={this.handleDeleteClick}>X</button>
        </form>
      </div>
    );
  }
}

ArtistSong.propTypes = propTypes;

export default ArtistSong;
