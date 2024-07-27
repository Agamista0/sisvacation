import React, { useState, useEffect } from 'react';
import './TripForm.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const TripForm = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', country: '', phone: '', address: '',
    tripType: '', numberOfTravelers: '', averageAge: '', budget: '', destination: '',
    checkInDate: '', checkOutDate: '', additionalInfo: '', 
  });

  const [initialTripType, setInitialTripType] = useState('');

  useEffect(() => {
    if (location.state && location.state.tripType) {
      setFormData(prevState => ({
        ...prevState,
        tripType: location.state.tripType
      }));
      setInitialTripType(location.state.tripType);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('https://slsvacation.com/api/submitTripForm', formData)
      .then(response => {
        console.log(response.data);
        toast.success(t('successMessage'));
        setFormData({
          firstName: '', lastName: '', email: '', country: '', phone: '', address: '',
          tripType: initialTripType, numberOfTravelers: '', averageAge: '', budget: '', destination: '',
          checkInDate: '', checkOutDate: '', additionalInfo: '', 
        });
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(t('errorMessage'));
      });
  };

  return (
    <div className="trip-form-container Container">
      <form onSubmit={handleSubmit} className="trip-form">
        <div className="form-header">
          <h3>{t('personalDetails')}</h3>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">{t('firstName')}</label>
            <input type="text" id="firstName" name="firstName" placeholder={t('firstName')} value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">{t('lastName')}</label>
            <input type="text" id="lastName" name="lastName" placeholder={t('lastName')} value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('email')}</label>
          <input type="email" id="email" name="email" placeholder={t('email')} value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tripType">{t('tripType')}</label>
            <input type="text" id="tripType" name="tripType" value={formData.tripType} onChange={handleChange} required readOnly />
          
            <label htmlFor="phone" className='Phone-Label'>{t('phone')}</label>
            <input type="text" placeholder={t('phone')} id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">{t('address')}</label>
          <input type="text" id="address" name="address" placeholder={t('address')} value={formData.address} onChange={handleChange} />
        </div>

        <h3>{t('tripDetails')}</h3>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">{t('country')}</label>
            <input type="text" id="country" name="country" onChange={handleChange} required placeholder={t('country')} value={formData.country} />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfTravelers">{t('numberOfTravelers')}</label>
            <input type="number" id="numberOfTravelers" name="numberOfTravelers" placeholder={t('numberOfTravelers')} value={formData.numberOfTravelers} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="averageAge">{t('averageAge')}</label>
            <input type="number" id="averageAge" name="averageAge" placeholder={t('averageAge')} value={formData.averageAge} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">{t('budget')}</label>
            <input type="text" id="budget" name="budget" placeholder={t('budget')} value={formData.budget} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="destination">{t('destination')}</label>
          <select id="destination" name="destination" onChange={handleChange} required value={formData.destination}>
            <option value="">{t('destinationOptions.choose')}</option>
            <option value="Luxor">{t('destinationOptions.luxor')}</option>
            <option value="Giza">{t('destinationOptions.giza')}</option>
            {/* Add more destination options here */}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="checkInDate">{t('checkInDate')}</label>
            <input type="date" id="checkInDate" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">{t('checkOutDate')}</label>
            <input type="date" id="checkOutDate" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">{t('additionalInfo')}</label>
          <textarea id="additionalInfo" name="additionalInfo" placeholder={t('additionalInfo')} value={formData.additionalInfo} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">{t('submitButton')}</button>
      </form>
    </div>
  );
};

export default TripForm;
