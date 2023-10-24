import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post('YOUR_BACKEND_API_URL/logout');
      // Handle successful logout, e.g., clear user authentication token and redirect to the login page
      setIsLoggedOut(true);
    } catch (error) {
      // Handle logout error, e.g., display an error message
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      {isLoggedOut ? (
        <p>You are logged out. Redirect to the login page.</p>
      ) : (
        <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Logout;
