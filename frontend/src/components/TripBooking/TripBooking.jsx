import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TripBooking.css';

const TripBooking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const tripTypes = [
    t('tripBooking.tripTypes.friends'),
    t('tripBooking.tripTypes.honeymoon'),
    t('tripBooking.tripTypes.solo'),
    t('tripBooking.tripTypes.family'),
    t('tripBooking.tripTypes.business')
  ];

  const handleTripTypeSelection = (type) => {
    navigate('/TripFormPage', { state: { tripType: type } });
  };

  return (
    <div className="trip-booking">
      <h3>{t('tripBooking.title')}</h3>
      {tripTypes.map((type, index) => (
        <button key={index} className="trip-button" onClick={() => handleTripTypeSelection(type)}>
          {type}
        </button>
      ))}
      <a href="/" className="back-link">{t('tripBooking.backToHomepage')}</a>
    </div>
  );
};

export default TripBooking;
