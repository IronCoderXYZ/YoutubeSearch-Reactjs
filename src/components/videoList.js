import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        // Step 2, goes to VideoListItem, pass function along
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
