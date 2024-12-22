/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
  const [isSharing, setIsSharing] = useState(false);
  const videoRef = useRef(null);
  let stream;
  const startScreenShare = async () => {
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsSharing(true);
    } catch (err) {
      console.error("画面共有に失敗しました。", err);
    }
  };

  const stopScreenShare = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setIsSharing(false);
    }
  };

  return (
    <div>
      <h1>画面共有テスト</h1>
      <video ref={videoRef} style={{ width: '100%' }} autoPlay playsInline></video>
      {!isSharing ? (
        <button onClick={startScreenShare}>画面共有開始</button>
      ) : (
        <button onClick={stopScreenShare}>画面共有停止</button>
      )}
    </div>
  );
