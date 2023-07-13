import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoId }) {
  const options = {
    height: '390',
    width: '640',
  };

  return <YouTube videoId={videoId} opts={options} />;
}

export default VideoPlayer;
