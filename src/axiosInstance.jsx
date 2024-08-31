import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Check if CSRF token is present
      const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');
      
      if (!xsrfTokenExists) {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
          withCredentials: true,
        });
      }

      // Attach auth token if available
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const previousPath = window.location.pathname;

      if (error.response.status === 401) {
        // Unauthorized, open login page
        window.location.href = '/login';
      } else if (error.response.status === 403) {
        // Forbidden, redirect to unauthorized page
        window.location.href = '/unauthorized';
      
      } else if (error.response.status === 404) {
        // Not found, redirect to not found page
        window.location.href = '/not-found';
       
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
















// import axios from 'axios';
// import { createBrowserHistory } from 'history';

// // Create a history object for navigation
// const history = createBrowserHistory();

// const axiosInstance = axios.create({
//  // baseURL: 'https://backend.innoblog.com.ng/api', // Production backend URL
//   baseURL: 'http://localhost:8000/api', 
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     try {
//       // Check if CSRF token is present in cookies
//       const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');
      
//       if (!xsrfTokenExists) {
       
//        // await axios.get('https://backend.innoblog.com.ng/sanctum/csrf-cookie', {
//         await axios.get('http://localhost:8000/api/sanctum/csrf-cookie', {
//           withCredentials: true,
//         });
//       }

//       // Attach the auth token if available
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       return Promise.reject(error);
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       const previousPath = window.location.pathname;

//       if (error.response.status === 401) {
//         // Unauthorized, redirect to login page
//         history.push('/login', { state: { from: previousPath } });
//       } else if (error.response.status === 403) {
//         // Forbidden, redirect to unauthorized page
//         history.push('/unauthorized');
//       } else if (error.response.status === 404) {
//         // Not found, redirect to not found page
//         history.push('/not-found');
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
