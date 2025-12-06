/* eslint-disable prettier/prettier */
import React from 'react';
import '../Style/Sheet.css';

function Sheet() {
  return (
    <>
      <h2 className='textCenter'>-Portfolio-</h2>
      <div className="iframeWrappers">
        <iframe
          loading="lazy"
          className="embedFrame"
          src="https://www.canva.com/design/DAGCvmatD8M/fG9eX8IzGiSbRaUvmPpm5Q/view?embed"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className='textCenter'>-卒業制作-&nbsp;&nbsp;&nbsp;制作物は<a href="http://localhost:3000/metaverse/">こちら</a></h2>
      <div className="iframeWrappers">
        <iframe
          loading="lazy"
          className="embedFrame"
          src="https://www.canva.com/design/DAGJDvuGjDM/yBbjeNW5jGdeyBhW-WSRPA/view?embed"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="textCenter">-Artificial Intelligence-</h2>

      <div className="iframeContainers">
        <div className="smallIframe">
          <iframe
            src="https://docs.google.com/presentation/d/1dz4m5v4dVLonfUxSvymLLkg-OJ9aTRbUVoYX1oIrljs/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>

        <div className="smallIframe">
          <iframe
            src="https://docs.google.com/presentation/d/1LkDKT6JHQmmmSlvNGk2v_f51pwVXgNRO_RoWJ9zkf2M/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Sheet;
