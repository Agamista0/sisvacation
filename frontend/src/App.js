import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import Paypal from './pages/Paypal';
import TripBookingPage from './pages/TripBooking';
import CallRequests from './pages/ADMIN/CallRequests/CallRequests';
import TripRequests from './pages/ADMIN/TripRequests/TripRequests';
import Login from './pages/ADMIN/Login/Login';
import AddOfferForm from './pages/ADMIN/AddOfferForm/AddOfferForm';
import PrivateRoute from './pages/ADMIN/PrivateRoute';

import OurOffers from './pages/OurOffers';
import Offer from './pages/Offer';
import Wishlist from './pages/Wishlist';
import TripFormPage from './pages/TripForm';
import { UserContextProvider } from './contexts/userContext';
import { Toaster } from 'react-hot-toast';
import './i18n.js';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

    <UserContextProvider>
    <Toaster />
  
    <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/CallRequests" element={<PrivateRoute element={CallRequests} />} />
    <Route path="/TripRequests" element={<PrivateRoute element={TripRequests} />} />
    <Route path="/AddOfferForm" element={<PrivateRoute element={AddOfferForm} />} />

        <Route path="/" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Paypal" element={<Paypal />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/TripBookingPage" element={<TripBookingPage />} />
        <Route path="/ouroffers/:offerName" element={<OurOffers />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/offer/:productId" element={<Offer />} />
        <Route path="/TripFormPage" element={<TripFormPage />} />
    </Routes>
    </UserContextProvider>
    </>

   );
}

export default App;
//offer card design 
//number of bookings per offer in offer cards
// remove sharm 
// overview video 
//footer links
//guided/private tour
//personalize page add more details.
//trip type
//edit, delete, add offers.
//cart page image edit

//wish list
//offer page like in get your guide 


//addcartcount