// VideoUploader.tsx
import React, { useState } from 'react';

interface VideoUploaderProps {
  label: string;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ label }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/mp4')) {
      const src = URL.createObjectURL(file);
      setVideoSrc(src);
    } else {
      alert('Please upload an MP4 video file.');
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="file-upload" className="form-label">{label}</label>
      <input className="form-control" type="file" id="file-upload" accept="video/mp4" onChange={handleFileChange} />
      {videoSrc && <video className="mt-3" src={videoSrc} controls style={{ width: '100%' }} />}
    </div>
  );
};

export default VideoUploader;
