import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fa fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setMenuClass(!menuClass);
    setNavClass(!navClass);
    if (!navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} width="170px" alt="Cinema App" />
          </div>
          <div
            className={'header-menu-toggle' + (menuClass ? ' is-active' : '')}
            id="header-mobile-menu"
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={'header-nav' + (navClass ? ' header-mobile-nav' : '')}>
            {HEADER_LIST.map((item) => (
              <li className="header-nav-item" key={item.id}>
                <span className="header-list-name">
                  <i className={item.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{item.name}</span>
              </li>
            ))}
            <input
              type="text"
              className="search-input"
              placeholder="Search for a movie"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
