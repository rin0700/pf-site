import React from 'react';
import '../Style/Header.css';
import 'normalize.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../img/ProfileIcon.svg';
import { ReactComponent as UnityIcon } from '../img/UnityIcon.svg';
import { ReactComponent as ContactIcon } from '../img/ContactIcon.svg';
import { ReactComponent as PortfolioIcon } from '../img/PortfolioIcon.svg';

const Header = () => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/');
  };

  const handleWorks = () => {
    navigate('/works');
  };

  const handleAvatar = () => {
    navigate('/avatar');
  };

  const handleMail = () => {
    navigate('/mail');
  };

  return (
    <>
      <div className="header-spacer" />
      <header className="header-container">
        <h1 className="header-title">My Website</h1>
        <nav className="header-nav">
          <button onClick={handleProfile} className="Btn">
            Profile
            <ProfileIcon className="svg" />
          </button>
          <button onClick={handleWorks} className="Btn">
            Works
            <PortfolioIcon className="svg" />
          </button>
          <button onClick={handleAvatar} className="Btn">
            Avatar
            <UnityIcon className="svg" />
          </button>
          <button onClick={handleMail} className="Btn">
            Mail
            <ContactIcon className="svg" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
