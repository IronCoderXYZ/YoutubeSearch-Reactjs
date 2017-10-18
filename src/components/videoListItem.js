import React from 'react';

// Step 3, pass calldown to final component
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    // Step 4, use function
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageURL} />
        </div>
        <div className='media-body'>
          <div className='media-heading'> {video.snippet.title} </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
