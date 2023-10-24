import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_API_URL/login', formData);
      // Handle successful login, e.g., store user authentication token or redirect to the main app
      console.log('Login successful:', response.data);
      setIsAuthenticated(true);
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated ? (
        <p>You are logged in. Redirect to the main app.</p>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
