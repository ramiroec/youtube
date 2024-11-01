// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div style={{ color: 'white' }}>No hay video seleccionado</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div style={{ marginBottom: '20px' }}>
      <iframe
        src={videoSrc}
        title="Video Player"
        style={{ width: '100%', height: '500px', borderRadius: '8px' }}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
