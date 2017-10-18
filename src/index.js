import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCTmi-j4Tl8zD5KySWmzjrFsEGQ7FygLBY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null }

    YTSearch({key: API_KEY, term: 'hello'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
