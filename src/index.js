import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCTmi-j4Tl8zD5KySWmzjrFsEGQ7FygLBY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'hello'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
