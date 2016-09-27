import React from 'react';
import request from 'superagent';
import Playlist from './playlist.jsx';
import ArtistSong from './artistSong.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.publishPost = this.publishPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    const url = 'https://project-2-893b8.firebaseio.com/playlist.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   artist: individualPostData.artist,
                   song: individualPostData.song,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, song, artist }) {
    if (id) {
      this.updatePost({ id, song, artist });
    } else {
      this.publishPost({ song, artist });
    }
  }
  deletePost(id) {
    const url = `https://project-2-893b8.firebaseio.com/playlist/${id}.json`;
    request.del(url)
           .then(() => {
             this.getPosts();
           });
  }
  updatePost({ id, song, artist }) {
    const url = `https://project-2-893b8.firebaseio.com/playlist/${id}.json`;
    request.patch(url)
           .send({ song, artist })
           .then(() => {
             this.getPosts();
           });
  }
  publishPost({ song, artist }) {
    const url = 'https://project-2-893b8.firebaseio.com/playlist.json';
    request.post(url)
           .send({ song, artist })
           .then(() => {
             this.getPosts();
           });
  }
  render() {
    return (
      <div id="container">
        <h1>My Playlist</h1>
        <Playlist handleDelete={this.deletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <ArtistSong handleDelete={this.deletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default Dashboard;
