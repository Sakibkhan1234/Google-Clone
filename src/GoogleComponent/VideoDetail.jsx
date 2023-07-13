import React from "react";
import style from './home.module.css'
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div>
        <iframe className={style.boxi} src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className={style.Con}>Your Content</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
