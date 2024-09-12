

// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useQueryClient } from '@tanstack/react-query';
// import axiosInstance from '../axiosInstance';
// import GoogleAuthComponent from './GoogleAuthComponent';
// import Title from '../components/Title';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [generalError, setGeneralError] = useState('');
//   const navigate = useNavigate();

//   // React Query's query client to cache queries
//   const queryClient = useQueryClient();

//   // Check if the user is already authenticated
//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');

//     if (authToken) {
//       // If authenticated, redirect to the previous path or default to home
//       const previousPath = sessionStorage.getItem('previousPath') || '/';
//       sessionStorage.removeItem('previousPath');
//       navigate(previousPath);
//     }

//     window.scrollTo(0, 0); // Scroll to the top of the page
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Clear previous errors
//       setErrors({});
//       setGeneralError('');

//       const response = await axiosInstance.post('/login', { email, password });
      
//       // Store the authentication token
//       localStorage.setItem('authToken', response.data.access_token);

//       // Fetch the user data directly after login and cache it using React Query
//       const userResponse = await axiosInstance.get('/profile/user');
//       queryClient.setQueryData(['AuthUserData'], userResponse.data); // Cache the user data
      
//       // Navigate after caching user data
//       setTimeout(() => {
//         const previousPath = sessionStorage.getItem('previousPath') || '/';
//         sessionStorage.removeItem('previousPath');
//         navigate(previousPath);
//       }, 100);

//     } catch (error) {
//       console.error('Login error:', error);

//       if (error.response && error.response.status === 401) {
//         setGeneralError('Invalid email or password.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12 shadow-md p-4">
//        <Title title={`Login`} />
//       <h1 className="text-2xl font-bold mb-4"> Login</h1>

//       {/* Manual login form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="border p-2 mt-2 w-full"
//         />
//         {errors.email && <p className="text-red-600">{errors.email[0]}</p>}

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="border p-2 mt-2 w-full"
//         />
//         {errors.password && <p className="text-red-600">{errors.password[0]}</p>}

//         <p className="mt-4">
//           <Link to="/forgot-password" className="text-blue-700">Forgot password?</Link>
//         </p>

//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full">
//           Login
//         </button>

//         {/* Display general error if exists */}
//         {generalError && <p className="text-red-600 mt-2">{generalError}</p>}
//       </form>

//       <div className="mt-4">
//         <GoogleAuthComponent text="Continue with Google" />
//       </div>

//       <p className="mt-4">
//         Don't have an account? <Link to="/register" className="text-blue-700">Register</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';
import GoogleAuthComponent from './GoogleAuthComponent';
import Title from '../components/Title';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  // React Query's query client to cache queries
  const queryClient = useQueryClient();

  // Check if the auth token is valid
  const validateAuthToken = async (token) => {
    try {
      const response = await axiosInstance.get('/profile/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      return false; // If an error occurs, assume the token is invalid
    }
  };

  // Check if the user is already authenticated
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      validateAuthToken(authToken).then((isValid) => {
        if (isValid) {
          // If the token is valid, redirect to the previous path or home
          const previousPath = sessionStorage.getItem('previousPath') || '/';
          sessionStorage.removeItem('previousPath');
          navigate(previousPath);
        } else {
          // If the token is invalid, remove it and stay on the login page
          localStorage.removeItem('authToken');
          navigate('/login');
        }
      });
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Clear previous errors
      setErrors({});
      setGeneralError('');

      const response = await axiosInstance.post('/login', { email, password });
      
      // Store the authentication token
      localStorage.setItem('authToken', response.data.access_token);

      // Fetch the user data directly after login and cache it using React Query
      const userResponse = await axiosInstance.get('/profile/user');
      queryClient.setQueryData(['AuthUserData'], userResponse.data); // Cache the user data
      
      // Navigate after caching user data
      setTimeout(() => {
        const previousPath = sessionStorage.getItem('previousPath') || '/';
        sessionStorage.removeItem('previousPath');
        navigate(previousPath);
      }, 100);

    } catch (error) {
      console.error('Login error:', error);

      if (error.response && error.response.status === 401) {
        setGeneralError('Invalid email or password.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 shadow-md p-4">
       <Title title={`Login`} />
      <h1 className="text-2xl font-bold mb-4"> Login</h1>

      {/* Manual login form */}
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

        {/* Display general error if exists */}
        {generalError && <p className="text-red-600 mt-2">{generalError}</p>}
      </form>

      <div className="mt-4">
        <GoogleAuthComponent text="Continue with Google" />
      </div>

      <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-700">Register</Link>
      </p>
    </div>
  );
}

export default Login;

