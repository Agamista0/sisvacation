import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OfferCard.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

axios.defaults.withCredentials = true;

const OfferCard = ({ apiEndpoint, wishlistEndpoint }) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch products
    axios.get(apiEndpoint)
      .then(response => {
        const productData = Array.isArray(response.data) ? response.data : [];
        setProducts(productData);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    // Fetch wishlist
    axios.get(wishlistEndpoint)
      .then(response => {
        const wishlistData = Array.isArray(response.data) ? response.data : [];
        setWishlist(wishlistData.map(item => item.product_id)); // Assuming wishlist data has product_id
      })
      .catch(error => {
        console.error('Error fetching wishlist:', error);
      });
  }, [apiEndpoint, wishlistEndpoint]);

  const handleAddToWishlist = (productId) => {
    const isWishlisted = wishlist.includes(productId);
    
    axios.post(wishlistEndpoint, { productId, action: isWishlisted ? 'remove' : 'add' })
      .then(response => {
        console.log(response.data.message);
        setWishlist(prevWishlist => 
          isWishlisted
            ? prevWishlist.filter(id => id !== productId)
            : [...prevWishlist, productId]
        );

        // Update product wishlisted status
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.id === productId
              ? { ...product, wishlisted: !isWishlisted }
              : product
          )
        );
      })
      .catch(error => {
        console.error('Error updating wishlist:', error);
      });
  };

  return (
    <div className='OfferCards-Container Container2'>
      {products.map((product) => (
        <div className="OfferCard" key={product.id}>
          <div className="hover-overlay">
            <Link to={`/offer/${product.id}`} className='cart-button'>
              <button className="get-offer-btn">
                {t('checkOffers')} <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className="image-container">
            <img loading='lazy' src={require(`../media/${product.product_img}`)} alt={product.title} />
          </div>
          <div className="card-info">
            <p className="card-people">
              {t(`triptypes.${product.triptype}`)} {/* Translate triptype */}
              <button onClick={() => handleAddToWishlist(product.id)}>
                <i className={product.wishlisted ? "fa-solid fa-heart wishlisted" : "fa-regular fa-heart"}></i>
              </button>
            </p>
            <a href={product.link} className="card-title">{product.title}</a> <br />
            <div className="trip-time">{t('tripTime', { hours: 2.5 })}</div>
            <button className="location">{t(`locations.${product.location}`)}</button>
            <p className="card-price">{t('fromPrice', { price: product.price })}</p>
            <input type="hidden" value={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCard;
