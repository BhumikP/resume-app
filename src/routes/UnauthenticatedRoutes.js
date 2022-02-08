import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Welcome from '../pages/publicPages/Welcome';

function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route index element={<Login />} />
    </Routes>
  );
}

export default UnauthenticatedRoutes;
