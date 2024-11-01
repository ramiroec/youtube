// src/components/VideoItem.js
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px' }}>
      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} style={{ marginRight: '10px' }} />
      <div style={{ color: 'white' }}>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
