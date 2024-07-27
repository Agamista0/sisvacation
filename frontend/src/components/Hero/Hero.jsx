import React from 'react';
import './Hero.css';
import HeroImg from '../../assets/test3.jpg';
import CheckOfferBtn from '../CheckOfferBtn/CheckOfferBtn';
import Plane from "../../assets/airplane-6-xxl.png";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero Container2">
      <div className="overlay"></div>
      <img className='HeroImgBackground' src={HeroImg} alt="Egyptian Art" />
      <div className="hero-section Container">
        <img src={Plane} className='planeicon' alt="" />
        <p className='hero-header'>{t('heroHeader')}</p>
        <p className="hero-header-p">
          {t('heroSubheader')}
        </p>
        <CheckOfferBtn />
      </div>
    </div>
  );
};

export default Hero;
