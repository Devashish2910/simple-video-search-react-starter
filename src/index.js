// import from libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
const YoutTubeKey = 'AIzaSyBF_wvEBFtP0up7j1NndKd_iLYHCaHnGBY';
const _ = require('lodash');


// import from files
import SearchBar from './components/search-bar.js';
import VideoDetails from './components/video-details';
import VideoList from './components/video-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      videos: [],
      activeVideo: null
    }

    this.videoSearch('react js');
  }

  videoSearch(term) {
    YouTubeSearch({key: YoutTubeKey, term: term}, videos => {
      this.setState({
        videos: videos,
        activeVideo: videos[0]
      })
    });
  }

  render() {
    const waitSearching = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearch = {waitSearching} />
        <VideoDetails video = {this.state.activeVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({activeVideo: selectedVideo})}
          videos = {this.state.videos}
        />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
