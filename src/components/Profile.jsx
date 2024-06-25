import React from 'react';
import '../Style/Profile.css';
import Shayna from '../img/Shayna.png';

export function Profile() {
  return (
    <div className="profile-container">
      <img src={Shayna} alt="Profile placeholder" className="profile-image" />
      <div className="profile-info">
        <div className="profile-education">
          <p>新潟コンピュータ専門学校<br />
            情報システム科 応用システムコース
          </p>
          <p>Mail&nbsp;&nbsp;&nbsp;&nbsp;:kss-22180031@nsgcl.jp<br />
            Mobile:000-0000-0000
          </p>
        </div>
        <p>Komamura Ryuichi</p>
        <h2 className="profile-title">駒村 隆一</h2>
        <h2>好きな言語;Swift,C#</h2>
        <p>趣味でのアプリ開発でSwiftを学習し、授業やゲーム制作でC#を学びました。
          どちらも豊富なライブラリとフレームワークがあり開発しやすいと感じています。</p>
        <h2>趣味:メタバース</h2>
        <p>メタバースのおかげで沢山の方と出会い、様々な技術を学びました。
          現在ではアバター、衣装製作のテスターや商品ページの画像制作にも携わっています。</p>
      </div>
    </div>
  );
}

export default Profile;
