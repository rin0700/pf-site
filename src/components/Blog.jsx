/* eslint-disable prettier/prettier */
import React from 'react';
import Note1 from '../img/Note1.png';
import Note2 from '../img/Note2.png';
import '../Style/Blog.css';

function Blog() {
  return (
    <div className='blog'>
      <h2 className='textCenter'>Blog</h2>
      <div className='note'>
        <div className='noteItem'>
          <a href="https://note.com/rin0700/n/n9798f38b95b0" target="_blank" rel="noopener noreferrer">
            <img src={Note1} alt='Note1' className='note1' />
            <p className='noteText'>-5000時間プレイヤーが語る-<br />今後のメタバースの可能性と期待</p>
          </a>
        </div>
        <div className='noteItem'>
          <a href="https://note.com/rin0700/n/n26285907f04a" target="_blank" rel="noopener noreferrer">
            <img src={Note2} alt='Note2' className='note2' />
            <p className='noteText'>-企業選びや就活で挫けないために-<br />就活の軸の探し方と重要性</p> {/* 画像下のテキスト */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
