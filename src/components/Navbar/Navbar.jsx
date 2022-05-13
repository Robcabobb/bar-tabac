import React from 'react';
import {GiHamburgerMenu} from 'react-icons/hi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Accueil</a></li>
      <li className='p__opensans'><a href="#about">Présentation</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#contact">Contactez</a></li>
    </ul>
  </nav>
);

export default Navbar;
