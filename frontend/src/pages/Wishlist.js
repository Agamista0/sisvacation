import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import OfferSection from '../components/OfferSection/OfferSection';

const OurOffers = () => {
     const [cartCount, setCartCount] = useState(0);
    // const { offerName } = useParams();

    // const apiEndpoint = `https://slsvacation.com/api/getProductsLocation?location=${offerName}`;

    // const incrementCartCount = () => {
    //     setCartCount(prevCount => prevCount + 1);
    // };

    return (
        <div className='OurOffersContainer'>
            <Navbar cartCount={cartCount} />
            <OfferSection
                apiEndpoint={'https://slsvacation.com/api/getUserWishlist'}
                wishlistEndpoint="https://slsvacation.com/api/addToWishlist"
            />
            <Footer />
        </div>
    );
}

export default OurOffers;
