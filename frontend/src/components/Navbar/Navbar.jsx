import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='nav-container'>
        <Logo />
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/Products">
            {t('ourOffers')}
          </Link>
          <Link to="/TripBookingPage">
            {t('personalizeYourTrip')}
          </Link>
          <Link to="/ContactPage">
            {t('requestACall')}
          </Link>
          <Link to="/wishlist">
            {t('wishlist')}
          </Link>
        </div>
        <Cart />
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
