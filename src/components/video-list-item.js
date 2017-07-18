import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  const ImageSrc = video.snippet.thumbnails.default.url;
  const VideoSrc = video.snippet.title;
  return(
    <li className = "list-group-item" onClick = {() => onVideoSelect(video)}>
     <div className = "video-list media">
       <div clasName = "media-left">
          <img className = "media-object" src = {ImageSrc}/>
       </div>

       <div className = "media-body">
          <div className = "media-body"> {VideoSrc} </div>
       </div>
     </div>
    </li>
  );
};

export default VideoListItem;
