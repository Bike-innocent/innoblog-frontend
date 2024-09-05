import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Clear previous errors
      setErrors({});
      setGeneralError('');

      const response = await axiosInstance.post('/login', { email, password });
      console.log('Login successful:', response.data);

      // Save the auth token
      localStorage.setItem('authToken', response.data.access_token);

      // Redirect to the previous page or home if there's no previous page
      const previousPath = sessionStorage.getItem('previousPath') || '/';
      sessionStorage.removeItem('previousPath'); // Clean up the stored path
      navigate(previousPath);

    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        // Handle 401 for invalid credentials
        if (error.response.status === 401 && error.response.data.message === 'Invalid credentials') {
          setGeneralError('Invalid email or password.');
        } else {
          // Handle other errors
          setGeneralError('An unexpected error occurred. Please try again.');
        }

        // Handle validation errors
        if (error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          setErrors({});
        }
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 mt-2 w-full"
        />
        {errors.email && <p className="text-red-600">{errors.email[0]}</p>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 mt-2 w-full"
        />
        {errors.password && <p className="text-red-600">{errors.password[0]}</p>}
        <p className="mt-4">
          <Link to="/forgot-password" className="text-blue-700">Forgot password?</Link>
        </p>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600">
          Login
        </button>

        {/* Display general error if exists */}
        {generalError && <p className="text-red-600 mt-2">{generalError}</p>}

        <p className="mt-4">
          Don't have an account? <Link to="/register" className="text-blue-700">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
