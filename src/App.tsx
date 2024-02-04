// App.tsx または親コンポーネント
import React from 'react';
import VideoUploader from './VideoUploader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"> {/* 中サイズのデバイスで半分の幅を取る */}
            <VideoUploader label="Video 1" />
          </div>
          <div className="col-md-6"> {/* 同上 */}
            <VideoUploader label="Video 2" />
          </div>
        </div>
      </div></div>
  );
};

export default App;
