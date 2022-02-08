import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<Dashboard />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
