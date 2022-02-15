import React from 'react';
import './loader.css';

// eslint-disable-next-line react/prop-types
function Loader({ isLoading }) {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-secondary z-50 opacity-90">
      {isLoading && (
        <div className="bg-secondary-600">
          <div className="min-h-screen flex justify-center items-center bg-secondary-700 opacity-100">
            <div className="loader bg-white p-5 rounded-full flex space-x-3">
              <div className="w-5 h-5 bg-secondary-800 rounded-full animate-bounce"></div>
              <div className="w-5 h-5 bg-secondary-800 rounded-full animate-bounce"></div>
              <div className="w-5 h-5 bg-secondary-800 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loader;
