import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { removeItemFromLocalStorage } from '../../utils/helper';

function Dashboard() {
  const user = useAuth();
  const navigate = useNavigate();

  const logOutUser = () => {
    navigate('/');
    user.logout();
    removeItemFromLocalStorage('token');
  };

  return (
    <div>
      You are in dashboard
      <button
        className="flex mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        onClick={() => logOutUser()}
      >
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
