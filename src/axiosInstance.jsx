

// import axios from 'axios';
// import { createBrowserHistory } from 'history';

// // Create a history object for navigation
// const history = createBrowserHistory();

// const axiosInstance = axios.create({
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
//       if (!document.cookie.includes('XSRF-TOKEN')) {
//         await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
//           withCredentials: true,
//           headers: {
//             'Accept': 'application/json',
//           }
//         });
//       }

//       const token = localStorage.getItem('authToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       return Promise.reject(error);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       const previousPath = window.location.pathname;

//       if (error.response.status === 401) {
//         history.push('/login', { state: { from: previousPath } });
//       } else if (error.response.status === 403) {
//         history.push('/unauthorized');
//       } else if (error.response.status === 404) {
//         history.push('/not-found');
//       }
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
  baseURL: 'https://backend.innoblog.com.ng/api', // Update this to your production backend URL
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
      if (!document.cookie.includes('XSRF-TOKEN')) {
        await axios.get('https://backend.innoblog.com.ng/sanctum/csrf-cookie', {
          withCredentials: true,
          headers: {
            'Accept': 'application/json',
          }
        });
      }

      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      return Promise.reject(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const previousPath = window.location.pathname;

      if (error.response.status === 401) {
        history.push('/login', { state: { from: previousPath } });
      } else if (error.response.status === 403) {
        history.push('/unauthorized');
      } else if (error.response.status === 404) {
        history.push('/not-found');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
