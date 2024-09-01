import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors({ password: ["Passwords do not match"] });
      return;
    }

    try {
      const response = await axiosInstance.post('/register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      localStorage.setItem('authToken', response.data.access_token);
      setErrors({});

      // Retrieve the previous path or default to home
      const previousPath = sessionStorage.getItem('previousPath') || '/home';
      navigate(previousPath);
    } catch (error) {
      console.error('Registration error:', error);

      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: "An unexpected error occurred. Please try again later." });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-3">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-600">{errors.name[0]}</p>}
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 w-full mt-2"
        />
        {errors.email && <p className="text-red-600">{errors.email[0]}</p>}
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 w-full mt-2"
        />
        {errors.password && !errors.password.includes("Passwords do not match") && (
          <p className="text-red-600">{errors.password[0]}</p>
        )}
        
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border p-2 w-full mt-2"
        />
        {errors.password && errors.password.includes("Passwords do not match") && (
          <p className="text-red-600">Passwords do not match</p>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full">
          Register
        </button>
        
        {errors.general && <p className="text-red-600 mt-2">{errors.general}</p>}
        
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
