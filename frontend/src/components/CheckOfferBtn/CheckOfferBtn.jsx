import React from 'react';
import './CheckOfferBtn.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CheckOfferBtn = () => {
  const { t } = useTranslation();

  return (
    <button className='CheckOfferBtn'>
      <Link to="/Products">
        {t('checkMoreOffers')} <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </button>
  );
};

export default CheckOfferBtn;
