import React from 'react';
import { toggleMenu } from '../utils';

const Header = () => {
  return (
    <header id="header" className="header">
      <a href="#" className="logo">
        Crystal logo
      </a>

      <ul>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#form-section" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>

      <div id="burger" className="burger">
        <span className="bar top"></span>
        <span className="bar mid"></span>
        <span className="bar bot"></span>
      </div>
    </header>
  );
};

export default Header;
