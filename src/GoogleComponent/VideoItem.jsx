import React from 'react';
import '../style/video.css';
import style from './home.module.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className={style.bo} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className={style.Title}>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;