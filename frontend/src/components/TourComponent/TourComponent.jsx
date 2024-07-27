import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TourComponent.css';
import ReserveDate from '../ReserveDate/ReserveDate';

const TourComponent = () => {
  const [offer, setOffer] = useState(null);
  const { productId: offerId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(`https://slsvacation.com/api/getProduct/${offerId}`);
        if (!response.ok) {
          throw new Error(t('failedToFetch'));
        }
        const data = await response.json();
        setOffer(data[0]);
      } catch (error) {
        console.error(t('errorFetchingOffer'), error);
      }
    };

    fetchOffer();
  }, [offerId, t]);

  if (!offer) {
    return <div>{t('loading')}</div>;
  }

  const handleGetOfferClick = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="about-activity">
          <p className="description">
            {offer.description}
          </p>
          <h3 className="activity-title">{t('aboutActivity')}</h3>
          <div className="activity-item">
            <i className="fa-regular fa-circle-check"></i>
            <div>
              <div className="item-title">{t('freeCancellation')}</div>
              <p className="item-description">{t('cancelUpTo')}</p>
            </div>
          </div>
          <div className="activity-item">
            <i className="fa-regular fa-credit-card"></i>
            <div>
              <div className="item-title">{t('payAndReserve')}</div>
              <p className="item-description">{t('keepFlexible')}</p>
            </div>
          </div>
          <div className="activity-item">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <div>
              <div className="item-title">{t('duration', { duration: offer.duration })}</div>
              <p className="item-description">{t('checkAvailability')}</p>
            </div>
          </div>
          <div className="activity-item">
            <i className="fa-regular fa-user"></i>
            <div>
              <div className="item-title">{t('liveTourGuide')}</div>
              <p className="item-description">{t('language')}</p>
            </div>
          </div>
        </div>
        <div className="Tour-Component-Sidebar">
          <div className="sell-out-alert">{t('likelyToSellOut')}</div>
          <div className='sidebar-content'>
            <div>
              <p>{t('from')}</p>
              <div className="price">£{offer.price}</div>
              <p>{t('perPerson')}</p>
            </div>
            <button className="check-availability" onClick={handleGetOfferClick}>{t('getOffer')}</button>
          </div>
          <div className='reserve-info'>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 6a3 3 0 0 1 3-3h12.75a3 3 0 0 1 3 3v4.858a7.007 7.007 0 0 0-2-1.297v-.936H4V15a1 1 0 0 0 1 1h4c0 .695.101 1.366.29 2H5a3 3 0 0 1-3-3V6Zm3-1h12.75a1 1 0 0 1 1 1v.625H4V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm1 5.586V13h-2v3.414l2.293 2.293 1.414-1.414L17 15.586Z" fill="#0071EB"></path>
            </svg>
            <p>{t('reserveAndPay')}</p>
          </div>
        </div>
      </div>
      <ReserveDate />
    </div>
  );
};

export default TourComponent;
