/* eslint-disable prettier/prettier */
import React from 'react';
import Vrc1 from '../img/vrcWld1.png';
import Vrc2 from '../img/vrcWld2.png';
import '../Style/Vrc.css';

function Vrc() {
  return (
    <div className='vrc'>
      <h2 className='textCenter'>-VRChat World-</h2>
      <div className='vrcGallery'>
        <div className='vrcItem'>
          <a href="https://vrchat.com/home/world/wrld_23ce6296-db36-4de4-bcdc-3b16beeccee4" target="_blank" rel="noopener noreferrer">
            <img src={Vrc1} alt='Vrc1' className='vrcImg' />
            <p className='vrcText'>Sep/24/2024<br />RinRoom</p>
          </a>
        </div>
        <div className='vrcItem'>
          <a href="https://vrchat.com/home/world/wrld_b08614dc-6a4b-4b6c-9845-6e7148408d98" target="_blank" rel="noopener noreferrer">
            <img src={Vrc2} alt='Vrc2' className='vrcImg' />
            <p className='vrcText'>Jun/08/2023<br />-Sleep with you-</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vrc;
