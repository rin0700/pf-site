/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
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
