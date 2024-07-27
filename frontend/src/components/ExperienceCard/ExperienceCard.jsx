import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ExperienceCard.css';

const ExperienceCard = () => {
  const [offer, setOffer] = useState(null);
  const { productId: offerId } = useParams();

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(`https://slsvacation.com/api/getProduct/${offerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch offer');
        }
        const data = await response.json();
        setOffer(data[0]);
      } catch (error) {
        console.error('Error fetching offer:', error);
      }
    };

    fetchOffer();
  }, [offerId]);

  if (!offer) {
    return <div>Loading...</div>;
  }

  const splitIncludes = offer.includes.split('-').map((item, index) => item.trim()).filter(item => item.length > 0);

  return (
    <div className="experience-card">
      <h3>Experience</h3>
      
      <section className="highlights">
        <p className='experience-card-p'>Highlights</p>
        <ul>
          {offer.highlights}
        </ul>
      </section>
      
      <section className="full-description">
        <p className='experience-card-p'>Description</p>
        <div className=''>
          <p>{offer.description}</p>
        </div>
      </section>
      
      <section className="includes">
        <p className='experience-card-p'>Includes</p>
        <ul>
          {splitIncludes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExperienceCard;
