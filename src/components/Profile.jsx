import React from 'react';
import '../Style/Profile.css';
import Shayna from '../img/Shayna.png';

export function Profile() {
  return (
    <div className="profile-container">
      <img src={Shayna} alt="Profile placeholder" className="profile-image" />
      <div>
        <h2 className="profile-title">Title of the Section</h2>
        <p className="profile-description">
          This is a description or any other text content that you want to align next to the image. It can be a few lines long and should wrap nicely around the image.
        </p>
      </div>
    </div>
  );
}

export default Profile;
