import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav'>
      <div className='nav-logo'>REV-Roam</div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About Us</li>
        <li className='nav-contact'>Contact</li>
      </ul>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;