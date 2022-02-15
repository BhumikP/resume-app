import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
// import Welcome from '../pages/publicPages/Welcome';

function UnauthenticatedRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Welcome />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default UnauthenticatedRoutes;
