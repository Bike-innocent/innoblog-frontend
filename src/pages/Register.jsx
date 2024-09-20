// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axiosInstance from '../axiosInstance';
// import GoogleAuthComponent from './GoogleAuthComponent';
// import { useQueryClient } from '@tanstack/react-query';
// import Title from '../components/Title';

// function Register() {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page
//   }, []);
  
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrors({ password: ["Passwords do not match"] });
//       return;
//     }

//     try {
//       const response = await axiosInstance.post('/register', {
//         name,
//         email,
//         password,
//         password_confirmation: confirmPassword,
//       });

//       // Store the auth token
//       localStorage.setItem('authToken', response.data.access_token);
//       setErrors({});

     
//       // Retrieve the previous path or default to home
//       const previousPath = sessionStorage.getItem('previousPath') || '/';
//       sessionStorage.removeItem('previousPath'); // Clear previous path
//       navigate(previousPath); // Redirect to previous path

//     } catch (error) {
//       console.error('Registration error:', error);

//       if (error.response && error.response.data.errors) {
//         setErrors(error.response.data.errors);
//       } else {
//         setErrors({ general: "An unexpected error occurred. Please try again later." });
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto  mt-12 shadow-md p-4">
//        <Title title={`Register`} />
//       <h1 className="text-2xl font-bold mb-4">Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           className="border p-2 w-full"
//         />
//         {errors.name && <p className="text-red-600">{errors.name[0]}</p>}

//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="border p-2 w-full mt-2"
//         />
//         {errors.email && <p className="text-red-600">{errors.email[0]}</p>}

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="border p-2 w-full mt-2"
//         />
//         {errors.password && !errors.password.includes("Passwords do not match") && (
//           <p className="text-red-600">{errors.password[0]}</p>
//         )}

//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm Password"
//           className="border p-2 w-full mt-2"
//         />
//         {errors.password && errors.password.includes("Passwords do not match") && (
//           <p className="text-red-600">Passwords do not match</p>
//         )}

//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full">
//           Register
//         </button>

//         {errors.general && <p className="text-red-600 mt-2">{errors.general}</p>}
//       </form>

//       <div className="mt-4">
//         <GoogleAuthComponent text="Continue with Google" />
//       </div>

//       <p className="mt-4">
//         Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Register;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import GoogleAuthComponent from './GoogleAuthComponent';
import { useQueryClient } from '@tanstack/react-query';
import Title from '../components/Title';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for show/hide password

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

      // Store the auth token
      localStorage.setItem('authToken', response.data.access_token);
      setErrors({});

      // Retrieve the previous path or default to home
      const previousPath = sessionStorage.getItem('previousPath') || '/';
      sessionStorage.removeItem('previousPath'); // Clear previous path
      navigate(previousPath); // Redirect to previous path

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
    <div className="max-w-md mx-auto  mt-12 shadow-md p-4">
      <Title title={`Register`} />
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

        {/* Password field with show/hide toggle */}
        <div className="relative mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 w-full pr-10" // Add padding for the icon
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-3 cursor-pointer text-gray-800"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && !errors.password.includes("Passwords do not match") && (
          <p className="text-red-600">{errors.password[0]}</p>
        )}

        {/* Confirm password field with show/hide toggle */}
        <div className="relative mt-2">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border p-2 w-full pr-10" // Add padding for the icon
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-3 cursor-pointer text-gray-800"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && errors.password.includes("Passwords do not match") && (
          <p className="text-red-600">Passwords do not match</p>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full">
          Register
        </button>

        {errors.general && <p className="text-red-600 mt-2">{errors.general}</p>}
      </form>

      <div className="mt-4">
        <GoogleAuthComponent text="Continue with Google" />
      </div>

      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
      </p>
    </div>
  );
}

export default Register;
