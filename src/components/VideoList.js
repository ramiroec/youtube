// src/components/VideoList.js
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
};

export default VideoList;
