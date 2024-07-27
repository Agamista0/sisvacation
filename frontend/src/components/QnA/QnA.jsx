import React from 'react';
import { useTranslation } from 'react-i18next';

const QnA = () => {
  const { t } = useTranslation();

  return (
    <section className="faq">
      <h2>{t('howToBook')}</h2>
      <p>{t('bookingInstructions')}</p>
      <h2>{t('paymentPolicy')}</h2>
      <p>{t('paymentDetails')}</p>
    </section>
  );
};

export default QnA;
