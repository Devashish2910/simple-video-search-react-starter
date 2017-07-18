import React from 'react';

const VideoDetails = props => {
  if(!props.video) {
    return <div>Loading ...</div>;
  }

  const video = props.video;
  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const details = video.snippet.description;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-details col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
       <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>

      <div className='details'>
       <h4 className='mt-0'>{title}</h4>
       <div className = 'video-detail'>{details}</div>
      </div>

    </div>
  );

};

export default VideoDetails;
