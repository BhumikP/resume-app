import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Template from '../../components/Template';
import { useAuth } from '../../hooks/useAuth';
import { removeItemFromLocalStorage } from '../../utils/helper';

function Dashboard() {
  const user = useAuth();
  const navigate = useNavigate();

  const logOutUser = () => {
    navigate('/');
    user.logout();
    removeItemFromLocalStorage('Authorization');
  };

  return (
    <div>
      <SideBar />
      You are in dashboard
      <Template />
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
