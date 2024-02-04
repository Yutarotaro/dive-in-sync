import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoUploader from './VideoUploader';

function App() {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col">
        <VideoUploader label="Video 1" />
      </div>
      <div className="col">
        <VideoUploader label="Video 2" />
      </div>
    </div>
  </div>
  );
}

export default App;
