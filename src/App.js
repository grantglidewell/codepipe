import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import CodeStream from './CodeStream';
import './App.css';

function App() {
  const [progress, updateProgress] = useState({});
  return (
    <div style={{ display: 'flex' }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=tFkm3X43hCQ&t"
        onProgress={data => {
          updateProgress(data.playedSeconds);
        }}
      />
      <CodeStream progress={Math.round(progress)} />
    </div>
  );
}

export default App;
