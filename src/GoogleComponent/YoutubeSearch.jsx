import React, { useState } from 'react';
import { google } from 'googleapis';
import SearchBar from './Searchbar';
import VideoPlayer from './VideoPlayer';

function YoutubeSearch() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  async function handleSearch(query) {
    const youtube = google.youtube({
      version: 'v3',
      auth: 'AIzaSyBR2eXDHfJYzTLOF7mZLJZbedxqlGZl400',
    });

    const response = await youtube.search.list({
      q: query,
      part: 'snippet',
      maxResults: 5,
    });

    const videoItems = response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.default.url,
    }));

    setVideos(videoItems);
    setSelectedVideoId(videoItems[0].id);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <VideoPlayer videoId={selectedVideoId} />
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <button onClick={() => setSelectedVideoId(video.id)}>Play</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YoutubeSearch;
