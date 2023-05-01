import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import Register from 'pages/Register';
import Login from 'pages/Login';
import HomePage from 'pages/HomePage';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
