import React from 'react';
import '../Style/Metaverse.css';

//http://localhost:3000/metaverse/

function Metaverse() {
  return (
    <div className="metaverse-container">
      <iframe
        className="metaverse-iframe"
        src="/metaverse/index.html"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Metaverse;
