import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = props => {
  const listItems = props.videos.map(video => {
    return (
      <VideoListItem
       onVideoSelect = {props.onVideoSelect}
       key = {video.etag}
       video = {video}
      />
    );
  });

  return (
    <ul className = "col-md-4 list-group">
     {listItems}
    </ul>
  );
};

export default VideoList;