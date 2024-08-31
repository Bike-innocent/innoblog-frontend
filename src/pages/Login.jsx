import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; // Use the axios instance
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/login', { email, password });
      console.log('Login successful:', response.data);
      
      // localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('authToken', response.data.access_token);

      setErrors({});
      setGeneralError('');

      // Redirect to the previous page or the home page if there's no previous page
      const previousPath = location.state?.from || '/';
      navigate(previousPath);
    } catch (error) {
      console.error('Login error:', error); // Log the entire error object
      console.log('Error response:', error.response); // Log the error response object

      if (error.response && error.response.data.errors) {
        console.log('Validation errors:', error.response.data.errors); // Log validation errors
        setErrors(error.response.data.errors);
        setGeneralError('');
      } else if (error.response && error.response.data.message) {
        console.log('General error message:', error.response.data.message); // Log general error message
        setGeneralError(error.response.data.message);
        setErrors({});
      } else {
        console.log('Unexpected error occurred');
        setGeneralError('Login failed!');
        setErrors({});
      }
    }
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
   // window.location.href = 'https://backend.innoblog.com.ng/auth/google';  // Update this URL as needed
    window.location.href = 'http://localhost:8000/auth/google';  // Update this URL as needed
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
        
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full">
          Login
        </button>

        {generalError && <p className="text-red-600 mt-2">{generalError}</p>}
        <p className="mt-4">
          Don't have an account? <Link to="/register" className="text-blue-700">Register</Link>
        </p>
      </form>

      {/* Divider */}
      {/* <div className="mt-6 flex items-center justify-center">
        <div className="border-t border-gray-300 w-full"></div>
        <span className="mx-4 text-gray-500">OR</span>
        <div className="border-t border-gray-300 w-full"></div>
      </div> */}

      {/* Google Login Button */}
      {/* <button
        onClick={handleGoogleLogin}
        className="mt-4 flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        <FaGoogle className="mr-2" />  Login with Google
      </button> */}
    </div>
  );
}

export default Login;
