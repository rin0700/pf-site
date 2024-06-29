import React from 'react';
import '../Style/Header.css';
import 'normalize.css';
import { ReactComponent as ProfileIcon } from '../img/ProfileIcon.svg';
import { ReactComponent as UnityIcon } from '../img/UnityIcon.svg';
import { ReactComponent as ContactIcon } from '../img/ContactIcon.svg';
import { ReactComponent as PortfolioIcon } from '../img/PortfolioIcon.svg';

  const handleProfile = () => {
    navigate('/');
  }

  const handleWorks = () => {
    navigate('/works');
  }
  return (
    <>
      <div className="header-spacer" />
      <header className="header-container">
        <h1 className="header-title">My Website</h1>
        <nav className="header-nav">
          <button className="Btn">
            Profile
            <ProfileIcon className="svg" />
          </button>
          <button className="Btn">
            Works
            <PortfolioIcon className="svg" />
          </button>
          <button className="Btn">
            Avatar
            <UnityIcon className="svg" />
          </button>
          <button className="Btn">
            Mail
            <ContactIcon className="svg" />
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
