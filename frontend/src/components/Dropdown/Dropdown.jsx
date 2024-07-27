import React from 'react';
import './Dropdown.css';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className={`dropdown ${isOpen ? 'active' : ''}`}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} arrow`}></i>
      </div>
      <div 
        className="dropdown-content" 
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentRef}>
          {content}
        </div>
      </div>
    </div>
  );
};

const DropdownQnA = () => {
  const { t } = useTranslation();

  const bookingSteps = (
    <>
      <p><span className='DropdownQnA-step'>{t('booking.step1')}</span> {t('booking.step1Content')}</p>
      <p>{t('booking.step2')}</p>
      <p>{t('booking.step3')}</p>
      <p>{t('booking.step4')}</p>
    </>
  );

  return (
    <div className='Container2 Container DropdownQnA'>
      <Dropdown 
        title={t('faq.bookingTitle')} 
        content={bookingSteps} 
      />
      <Dropdown 
        title={t('faq.paymentTitle')} 
        content={t('payment.policy')} 
      />
    </div>
  );
};

export default DropdownQnA;
