import React from 'react';
import './Overview.css';
import Overviewvideo from '../../assets/WhatsApp Video 2024-07-16 at 8.59.05 PM.mp4';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <div className="overview-wrapper">
      <section className="overview Container2">
        <div className="Offer-Header">
          <h3>{t('overviewHeader')}</h3>
          <div className="line"></div>
        </div>
        <div className="overview-container">
          <div className="overview-container-left">
            <h1>{t('whySlsVacation')}</h1>
            <p>{t('overviewParagraph1')}</p>
            <p>{t('overviewParagraph2')}</p>
            <p>{t('overviewParagraph3')}</p>
          </div>
          <div className="overview-container-right">
            <video src={Overviewvideo} type="video/mp4" controls></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
