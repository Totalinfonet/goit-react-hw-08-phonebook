// import React from 'react';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { Filter } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
// import { AppWrapper, Title } from './App.styled';

// export const App = () => {
//   return (
//     <AppWrapper>
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <Title>Contacts</Title>
//       <Filter />
//       <ContactList />
//     </AppWrapper>
//   );
// };

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import Register from 'pages/Register';
import Login from 'pages/Login';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>{' '}
    </>
  );
};
