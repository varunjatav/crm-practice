import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Account from '../pages/Account';
import Calender from '../pages/Calender';
import Converter from '../pages/Converter';
import Chart from '../pages/Chart';
import OnTrip from '../pages/OnTrip';
import PastTrip from "../pages/PastTrip";
import Upload from '../pages/Upload';
import Balance from '../pages/Balance';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/converter' element={<Converter />} />
        <Route path='/ontrip' element={<OnTrip />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/balance' element={<Balance />} />
    </Routes>
  )
}

export default Router