import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    inquiry: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://slsvacation.com/api/submitCall', formData);
      console.log('Form submitted successfully:', response.data);
      toast.success(t('successMessage'));
      setFormData({
        firstName: '',
        lastName: '',
        country: '',
        phone: '',
        email: '',
        inquiry: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t('errorMessage'));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="schedule-call-form">
      <div className="FormHeader-Container">
        <FormHeader />
      </div>

      <div className="ContactUs">
        <FormFields onChange={handleInputChange} formData={formData} />
        <SubmitButton />
      </div>
    </form>
  );
};

const FormHeader = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className='form-header'>{t('formHeader')}</p>
      <p className='Traveler'>{t('travelerGreeting')}</p>
      <p>{t('introduction')}</p>
      <p className='Lookingforward'>{t('lookingForward')}</p>
      <p>{t('closing')}</p>
      <p>{t('signature')}</p>
    </div>
  );
};

const FormFields = ({ onChange, formData }) => {
  const { t } = useTranslation();
  return (
    <div className="form-fields">
      <div className="form-group">
        <label htmlFor="firstName">{t('firstName')}</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={onChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">{t('lastName')}</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={onChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="country">{t('country')}</label>
        <input type="text" id="country" placeholder={t('country')} value={formData.country} onChange={onChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{t('phone')}</label>
        <input type="tel" id="phone" placeholder={t('phone')} value={formData.phone} onChange={onChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t('email')}</label>
        <input type="email" id="email" value={formData.email} onChange={onChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="inquiry">{t('inquiry')}</label>
        <textarea id="inquiry" value={formData.inquiry} onChange={onChange} required></textarea>
      </div>
    </div>
  );
};

const SubmitButton = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="submit-button">{t('submitButton')}</button>
  );
};

export default ContactUs;
