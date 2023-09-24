import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Saved from '../pages/Saved';
import Dashboard from '../pages/Dashboard';
import Calender from '../pages/Calender';
import Messages from '../pages/Messages';
import Users from '../pages/Users';
import Analytics from '../pages/Analytics';
import FileManager from "../pages/FileManager";
import Profile from '../pages/Profile';
import Balance from '../pages/Balance';

const Router = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/file-manager' element={<FileManager />} >
          <Route path="/file-manager/settings/profile" element={<Profile/>} />
        </Route>
        <Route path='/saved' element={<Saved />} />
        <Route path='/balance' element={<Balance />} />
    </Routes>
  )
}

export default Router