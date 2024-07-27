import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './ReserveDate.css';

const ParticipantSelector = ({ person, setPerson }) => {
  const { t } = useTranslation();
  return (
    <div className="participant-selector" onClick={(e) => e.stopPropagation()}>
      <div className="participant-type">
        <span>{t('persons')}</span>
        <div className="counter">
          <button onClick={() => setPerson(Math.max(0, person - 1))}>-</button>
          <span>{person}</span>
          <button onClick={() => setPerson(person + 1)}>+</button>
        </div>
      </div>
      <div className="participant-type">
        <div className="counter">

        </div>
      </div>
    </div>
  );
};

const DatePicker = ({ selectedDate, setSelectedDate, closeDatePicker }) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (offset) => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + offset, 1));
  };

  const changeYear = (year) => {
    setCurrentMonth(prevMonth => new Date(year, prevMonth.getMonth(), 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<button key={`empty-${i}`} disabled></button>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      days.push(
        <button
          key={day}
          className={selectedDate === date ? 'selected' : ''}
          onClick={() => {
            setSelectedDate(date);
            closeDatePicker();
          }}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="date-picker" onClick={(e) => e.stopPropagation()}>
      <div className="date-picker-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <select 
          value={currentMonth.getMonth()} 
          onChange={(e) => setCurrentMonth(new Date(currentMonth.getFullYear(), parseInt(e.target.value), 1))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>{t('month', { month })}</option>
          ))}
        </select>
        <select 
          value={currentMonth.getFullYear()} 
          onChange={(e) => changeYear(parseInt(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => currentMonth.getFullYear() - 5 + i).map(year => (
            <option key={year} value={year}>{t('year', { year })}</option>
          ))}
        </select>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="calendar">
        <div className="day-labels">
          <span>{t('sun')}</span>
          <span>{t('mon')}</span>
          <span>{t('tue')}</span>
          <span>{t('wed')}</span>
          <span>{t('thu')}</span>
          <span>{t('fri')}</span>
          <span>{t('sat')}</span>
        </div>
        <div className="days">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

const ReserveDate = () => {
  const { t } = useTranslation();
  const [person, setPerson] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [showParticipants, setShowParticipants] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { productId: offerId } = useParams();

  const handleGetOffer = async () => {
    if (!selectedDate) {
      alert(t('alertDateRequired'));
      return;
    }

    try {
      const response = await axios.post('https://slsvacation.com/api/addToCart', {
        productId: offerId,
        quantity: person,
        date: selectedDate
      });
      
      if (response.status === 201 || response.status === 200) {
        alert(t('alertOfferAdded'));
      }
    } catch (error) {
      console.error('Error adding offer to cart:', error);
      alert(t('alertOfferFailed'));
    }
  };

  return (
    <div className="ReserveDate">
      <h3>{t('selectParticipantsDate')}</h3>
      <div className="selector-container">
        <div className="dropdown" onClick={() => setShowParticipants(!showParticipants)}>
          <span>{t('personX', { count: person })}</span>
          {showParticipants && (
            <ParticipantSelector
              person={person}
              setPerson={setPerson}
            />
          )}
        </div>
        <div className="dropdown" onClick={() => setShowDatePicker(!showDatePicker)}>
          <span>{selectedDate || t('selectDate')}</span>
          {showDatePicker && (
            <DatePicker 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
              closeDatePicker={() => setShowDatePicker(false)} 
            />
          )}
        </div>
        <button className="check-availability" onClick={handleGetOffer}>
          {t('getOffer')}
        </button>
      </div>
    </div>
  );
};

export default ReserveDate;
