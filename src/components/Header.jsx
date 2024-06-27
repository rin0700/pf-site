import React from 'react';
import '../Style/Header.css';
import 'normalize.css';
import { ReactComponent as ProfileIcon } from '../img/ProfileIcon.svg';
import { ReactComponent as UnityIcon } from '../img/UnityIcon.svg';
import { ReactComponent as ContactIcon } from '../img/ContactIcon.svg';
import { ReactComponent as PortfolioIcon } from '../img/PortfolioIcon.svg';
  return (
          <button className="Btn">
            Profile
            <ProfileIcon className="svg" />
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
  )
}

export default Header



