import React from 'react';
import '../Style/Profile.css';
import Shayna from '../img/Shayna.png';

export function Profile() {
  return (
    <div className="profile-container">
      <img src={Shayna} alt="Profile placeholder" className="profile-image" />
      <div className="profile-info">
        <div className="profile-education">
          <p>
            新潟コンピュータ専門学校
            <br />
            情報システム科 応用システムコース
          </p>
          <p>
            Mail&nbsp;&nbsp;&nbsp;&nbsp;:kss-22180031@nsgcl.jp
            <br />
            Mobile:000-0000-0000
          </p>
        </div>
        <p className="custom-underline"></p>
        <div className="center">
          <p>Komamura&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ryuichi</p>
          <h2 className="profile-title">駒村 隆一</h2>
        </div>
        <h2>好きな言語;Swift</h2>
        <p className="tight-spacing">
          高校時代からiOSに興味を持ち専門学生時代にSwift/UIを学びました。
          <br />
          豊富なライブラリとフレームワークがあり開発しやすいと感じています。
        </p>
        <h2>趣味:メタバース</h2>
        <p className="tight-spacing">
          メタバースのおかげで沢山の方と出会い、様々な技術を学びました。
          <br />
          現在ではアバター、衣装製作のテスターや商品ページの画像制作にも携わっています。
        </p>
      </div>
    </div>
  );
}

export default Profile;
