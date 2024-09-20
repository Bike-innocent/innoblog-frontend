// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axiosInstance from '../axiosInstance';
// import Title from '../components/Title'; // Import your axios instance

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// function ResetPassword() {
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [message, setMessage] = useState('');
//   const query = useQuery();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post('/reset-password', {
//         email: query.get('email'),
//         token: query.get('token'),
//         password,
//         password_confirmation: passwordConfirmation,
//       });
//       setMessage(response.data.message);
//       if (response.data.status === 'success') {
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000); // Redirect to login page after 3 seconds
//       }
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('Something went wrong. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md p-3 shadow  mx-auto mt-12">
//        <Title title={`Reset Password`} />
//       <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="New Password"
//           required
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="password"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           placeholder="Confirm Password"
//           required
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Reset Password
//         </button>
//       </form>
//       {message && (
//         <p
//           className={`mt-4 text-center ${
//             message === 'Your password has been reset!' ? 'text-green-600' : 'text-red-600'
//           }`}
//         >
//           {message}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ResetPassword;



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import Title from '../components/Title';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for show/hide password

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false); // State for password confirmation visibility
  const [message, setMessage] = useState('');
  const query = useQuery();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/reset-password', {
        email: query.get('email'),
        token: query.get('token'),
        password,
        password_confirmation: passwordConfirmation,
      });
      setMessage(response.data.message);
      if (response.data.status === 'success') {
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect to login page after 2 seconds
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-md p-3 shadow mx-auto mt-12">
      <Title title={`Reset Password`} />
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Field */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            required
            className="w-full p-2 border border-gray-300 rounded pr-10" // Add padding for the icon
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-3 cursor-pointer text-gray-800"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type={showPasswordConfirmation ? 'text' : 'password'}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password"
            required
            className="w-full p-2 border border-gray-300 rounded pr-10" // Add padding for the icon
          />
          <span
            onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
            className="absolute right-2 top-3 cursor-pointer text-gray-800"
          >
            {showPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center ${
            message === 'Your password has been reset!' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default ResetPassword;
