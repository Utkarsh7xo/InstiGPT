import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_API_URL/signup', formData);
      // Handle successful registration, e.g., show a success message or redirect to the login page
      console.log('Registration successful:', response.data);
      setIsRegistered(true);
    } catch (error) {
      // Handle registration error, e.g., display an error message
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {isRegistered ? (
        <p>Registration successful! You can now log in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
