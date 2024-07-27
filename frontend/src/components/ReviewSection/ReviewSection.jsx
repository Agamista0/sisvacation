import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import './ReviewSection.css';

const ReviewSection = () => {
  const { productId: offerId } = useParams();
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ username: '', rating: 0, reviewText: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchReviews = (page) => {
    console.log('Fetching reviews for offerId:', offerId);
    axios.get(`https://slsvacation.com/api/getReviews/${offerId}?page=${page}`)
      .then(response => {
        console.log('Received reviews:', response.data);
        setReviews(prevReviews => [...prevReviews, ...response.data.reviews]);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        toast.error(t('error'));
      });
  };

  useEffect(() => {
    fetchReviews(1);
  }, [offerId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (newReview.rating === 0) {
      toast.error(t('error'));
      return;
    }

    toast.promise(
      axios.post('https://slsvacation.com/api/addReview', {
        offerId,
        userId: 1,
        username: newReview.username,
        rating: newReview.rating,
        reviewText: newReview.reviewText
      }),
      {
        loading: t('loading'),
        success: (response) => {
          setReviews([{ ...newReview, review_date: new Date() }, ...reviews]);
          setNewReview({ username: '', rating: 0, reviewText: '' });
          return t('submitReview');
        },
        error: t('error')
      }
    );
  };

  const handleSeeMoreReviews = () => {
    if (currentPage < totalPages) {
      fetchReviews(currentPage + 1);
    }
  };

  return (
    <div className="review-section-container">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="review-section">
        <div className="filter-section">
          <p className='Bystarrating'>{t('bystarRating')}</p>
          <div className="star-filter">
            <label>
              <input className='custom-checkbox' type="checkbox" checked /> {t('allStarRatings')}
            </label>
            {[5, 4, 3, 2, 1].map(stars => (
              <label key={stars}>
                <input type="checkbox" className='custom-checkbox' /> {t('starRating', { stars })}
                <span className="stars">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="reviews-offer-container">
          {reviews.map((review) => (
            <div className="review" key={review.id}>
              <div className="review-header">
                <span className="avatar">G</span>
                <div className="review-info">
                  <div className='SLStraveler'>{t('user', { username: review.username })}</div>
                  <div className='SLStravelerDate'>{new Date(review.review_date).toLocaleDateString()} — {t('verifiedBooking')}</div>
                </div>
                <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              </div>
              <p>{review.review_text}</p>
            </div>
          ))}
        </div>
      </div>
      
      {currentPage < totalPages && (
        <button className="see-more" onClick={handleSeeMoreReviews}>
          {t('seeMoreReviews')}
        </button>
      )}

      <form onSubmit={handleReviewSubmit} className="review-form">
        <div className="rating-input">
          {[5, 4, 3, 2, 1].map(stars => (
            <React.Fragment key={stars}>
              <input
                type="radio"
                id={`star${stars}`}
                name="rating"
                value={stars}
                checked={newReview.rating === stars}
                onChange={() => setNewReview({ ...newReview, rating: stars })}
              />
              <label htmlFor={`star${stars}`}>★</label>
            </React.Fragment>
          ))}
        </div>
        <input
          type="text"
          value={newReview.username}
          onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
          placeholder={t('yourUsername')}
          required
        />
        <textarea
          value={newReview.reviewText}
          onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
          placeholder={t('writeReview')}
          required
        />
        <button type="submit">{t('submitReview')}</button>
      </form>
    </div>
  );
};

export default ReviewSection;
