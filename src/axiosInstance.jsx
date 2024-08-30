// import axios from 'axios';
// import { createBrowserHistory } from 'history';

// // Create a history object for navigation
// const history = createBrowserHistory();

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/api',
//   withCredentials: true, // Ensures cookies are sent with requests
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });

// // Interceptor to handle CSRF token and Authorization header
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     try {
//       // Check if CSRF token is present in cookies
//       if (!document.cookie.includes('XSRF-TOKEN')) {
//         // Fetch CSRF cookie if not present
//         await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
//           withCredentials: true,
//         });
//       }

//       // Attach Bearer token if available
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       console.error('Error fetching CSRF token:', error);
//       return Promise.reject(error);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor to handle responses and errors
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       const previousPath = window.location.pathname;

//       if (error.response.status === 401) {
//         // Unauthorized, redirect to login
//         history.push('/login', { state: { from: previousPath } });
//       } else if (error.response.status === 403) {
//         // Forbidden, redirect to unauthorized page
//         history.push('/unauthorized');
//       } else if (error.response.status === 404) {
//         // Not Found, redirect to 404 page
//         history.push('/not-found');
//       } else if (error.response.status === 500) {
//         // Internal Server Error, handle it appropriately
//         console.error('Server error:', error.response.data);
//       }
//     } else {
//       console.error('Network error:', error);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;




import axios from 'axios';
import { createBrowserHistory } from 'history';

// Create a history object for navigation
const history = createBrowserHistory();

const axiosInstance = axios.create({
  baseURL: 'https://backend.innoblog.com.ng/api', // Production backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Check if CSRF token is present in cookies
      const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');
      
      if (!xsrfTokenExists) {
        // Fetch the CSRF token from the backend if not already present
        await axios.get('https://backend.innoblog.com.ng/sanctum/csrf-cookie', {
          withCredentials: true,
        });
      }

      // Attach the auth token if available
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      return Promise.reject(error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const previousPath = window.location.pathname;

      if (error.response.status === 401) {
        // Unauthorized, redirect to login page
        history.push('/login', { state: { from: previousPath } });
      } else if (error.response.status === 403) {
        // Forbidden, redirect to unauthorized page
        history.push('/unauthorized');
      } else if (error.response.status === 404) {
        // Not found, redirect to not found page
        history.push('/not-found');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
