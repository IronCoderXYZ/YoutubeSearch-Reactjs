import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCTmi-j4Tl8zD5KySWmzjrFsEGQ7FygLBY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null }
    this.videoSearch('anthem');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    const videoQuery = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onTermChange={videoQuery} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          // Calback 1, to VideoList (updates the state with video passed up)
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
