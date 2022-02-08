import React, { useContext, useEffect, useState } from 'react';
import { getItemFromLocalStorage } from '../utils/helper';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const token = getItemFromLocalStorage('token');

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    const token = getItemFromLocalStorage('token');

    if (!token) {
      isLoggedIn && setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }} {...props} />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
