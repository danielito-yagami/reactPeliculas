import React from 'react';
import ReactPlayer from 'react-player';


//Se exporta el componente video de prueba

export default function Video() {
  return (
    <ReactPlayer
      src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      controls
      muted={false}
      width="100%"
      height="360px"
    />
  );
}

