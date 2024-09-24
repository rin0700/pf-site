/* eslint-disable prettier/prettier */
import React from 'react'

function Sheet() {
  return (
    <>
      <div className='textCenter'>
        <h2>PORTFOLIO</h2>
        <iframe src="https://docs.google.com/presentation/d/1gIyTjE6vPznTC44LGMvR0xmGr0OyUNRiC95ubga8OCA/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="850" height="530" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <h2 className='textCenter'>その他</h2>
      <div className='textCenter' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div style={{ margin: '0 10px' }}>
          <iframe src="https://docs.google.com/presentation/d/1dz4m5v4dVLonfUxSvymLLkg-OJ9aTRbUVoYX1oIrljs/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="410" height="265" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <div style={{ margin: '0 10px' }}>
          <iframe src="https://docs.google.com/presentation/d/1LkDKT6JHQmmmSlvNGk2v_f51pwVXgNRO_RoWJ9zkf2M/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="410" height="265" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
      </div>
    </>
  )
}

export default Sheet