import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from '../utils/helper';

function AuthenticatedRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getItemFromLocalStorage('Authorization') == undefined) {
      console.log('Here');
      removeItemFromLocalStorage('Authorization');
      navigate('/');
    }
  }, []);
  return (
    <Routes>
      <Route path="/user" element={<Dashboard />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
