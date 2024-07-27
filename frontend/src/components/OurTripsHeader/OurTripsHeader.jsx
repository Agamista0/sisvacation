import React from 'react'
import { useTranslation } from 'react-i18next';

const OurTripsHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="Offer-Header">
    <h3>
      {t('overviewtripsheader')}
    </h3>
    <div className='line'></div>
    </div>  
  )
}

export default OurTripsHeader
