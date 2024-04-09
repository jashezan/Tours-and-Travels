import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import Payment from '../pages/Payment';
import Profile from '../pages/Profile'
import Chats from '../pages/Chats';
import Guides from '../pages/Guides';
import GuideDetails from '../pages/GuideDetails';
import Plane from '../pages/Plane';
import About from '../pages/About';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminUser from '../pages/admin/AdminUser';
import AdminTour from '../pages/admin/AdminTour';
import AdminPlane from '../pages/admin/AdminPlane';
import AdminBooking from '../pages/admin/AdminBooking';
import AdminReview from '../pages/admin/AdminReview';
import AdminGuide from '../pages/admin/AdminGuide';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/plane" element={<Plane />} />
      <Route path="/guides/:id" element={<GuideDetails />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/user" element={<AdminUser />} />
      <Route path="/admin/tour" element={<AdminTour />} />
      <Route path="/admin/plane" element={<AdminPlane />} />
      <Route path="/admin/booking" element={<AdminBooking />} />
      <Route path="/admin/reviews" element={<AdminReview />} />
      <Route path="/admin/guide" element={<AdminGuide />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Routers