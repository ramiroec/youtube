// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import youtube from './api/youtube';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (term) => {
    const response = await youtube.get('/search', { params: { q: term } });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <VideoPlayer video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default App;
