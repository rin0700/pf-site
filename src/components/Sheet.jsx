/* eslint-disable prettier/prettier */
import React from 'react';
import '../Style/Sheet.css';

function Sheet() {
  return (
    <>
      <h2 className='textCenter'>-Portfolio-</h2>
      <div className="iframeWrappers">
        <iframe
          src="https://docs.google.com/presentation/d/1gIyTjE6vPznTC44LGMvR0xmGr0OyUNRiC95ubga8OCA/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true">
        </iframe>
      </div>
      <h2 className="textCenter">-Artificial Intelligence-</h2>
      <div className="iframeContainers">
        <div className="smallIframe">
          <iframe
            src="https://docs.google.com/presentation/d/1dz4m5v4dVLonfUxSvymLLkg-OJ9aTRbUVoYX1oIrljs/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          >
          </iframe>
        </div>
        <div className="smallIframe">
          <iframe
            src="https://docs.google.com/presentation/d/1LkDKT6JHQmmmSlvNGk2v_f51pwVXgNRO_RoWJ9zkf2M/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          >
          </iframe>
        </div>
      </div >
    </>
  );
}

export default Sheet;