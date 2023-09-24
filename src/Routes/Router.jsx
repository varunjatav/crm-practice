import React from "react";
import { Route, Routes } from "react-router-dom";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";
import FileManageProfile from "../pages/FileManagerPath/Profile";
import Messages from "../pages/Messages";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import FileManager from "../pages/FileManager";
import Billing from "../pages/FileManagerPath/Billing";
import Balance from "../pages/Balance";
import FileManager2FA from "../pages/FileManagerPath/FileManager2FA";
import Profile from "../pages/Settings/Profile";
import SettingBilling from "../pages/Settings/Billing";
import Settings2FA from "../pages/Settings/Settings2FA";


const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/file-manager" element={<FileManager />}>
        <Route path="profile" element={<FileManageProfile />} />
        <Route path="billing" element={<Billing />} />
        <Route path="2fa" element={<FileManager2FA />} />
      </Route>
      <Route path="/settings" element={<Settings />}>
        <Route path="profile" element={<Profile />} />
        <Route path="billing" element={<SettingBilling />} />
        <Route path="2fa" element={<Settings2FA />} />
      </Route>
      <Route path="/balance" element={<Balance />} />
    </Routes>
  );
};

export default Router;
