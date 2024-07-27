import React from 'react';
import './Footer.css';
import appstore from '../../assets/app-store-badge-en-us.svg';
import googleplay from '../../assets/google-play-badge-en-us.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); // Store the selected language in local storage
  };

  return (
    <>
      <footer className="footer Container2 Container">
        <div className="footer-section">
          <p className='Footer-Header'>{t('language')}</p>
          <select onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English (United States)</option>
            <option value="de">German (Germany)</option>
            <option value="ru">Russian (Russia)</option>
          </select>
          <p className='Footer-Header'>{t('currency')}</p>
          <select>
            <option>Egyptian Pound (E£)</option>
          </select>
        </div>
        
        <div className="footer-section">
          <p className='Footer-Header'>{t('mobile')}</p>
          <img src={appstore} alt={t('mobile')} className='appimg'/>
          <img src={googleplay} alt={t('mobile')} className='appimg'/>
        </div>
        
        <div className="footer-section">
          <p className='Footer-Header'>{t('support')}</p>
          <ul>
            <li>{t('contact')}</li>
            <li>{t('legalNotice')}</li>
            <li>{t('privacyPolicy')}</li>
            <li>{t('cookiesMarketingPreferences')}</li>
            <li>{t('generalTermsConditions')}</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <p className='Footer-Header'>{t('company')}</p>
          <ul>
            <li>{t('aboutUs')}</li>
            <li>{t('careers')}</li>
            <li>{t('blog')}</li>
            <li>{t('press')}</li>
            <li>{t('giftCards')}</li>
            <li>{t('explorer')}</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <p className='Footer-Header'>{t('workWithUs')}</p>
          <ul>
            <li>{t('asSupplyPartner')}</li>
            <li>{t('asContentCreator')}</li>
            <li>{t('asAffiliatePartner')}</li>
          </ul>
          <p className='Footer-Header'>{t('waysYouCanPay')}</p>
          <div className="payment-methods">
            {/* Add payment method icons here */}
          </div>
        </div>
      </footer>

      <div className="footer-bottom Container">
        <div className="content">
          <p className="text">{t('footerText')}</p>
          <div className="social-icons">
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
