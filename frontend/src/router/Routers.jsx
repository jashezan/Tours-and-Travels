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

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/guides' element={<Guides />} />
      <Route path='/guides/:id' element={<GuideDetails />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tours/search' element={<SearchResultList />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='/chats' element={<Chats />} />
    </Routes>
  )
}

export default Routers