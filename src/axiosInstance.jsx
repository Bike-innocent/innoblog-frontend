import axios from 'axios';

const axiosInstance = axios.create({
 baseURL: 'http://localhost:8000/api',
  //baseURL: 'https://backend.innoblog.com.ng/api',
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
      const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');
      
      if (!xsrfTokenExists) {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
       //await axios.get('https://backend.innoblog.com.ng/sanctum/csrf-cookie', {
          withCredentials: true,
        });
      }

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
      const currentPath = window.location.pathname;

      if (error.response.status === 401) {
        // Save the current path before redirecting to login, excluding login and register pages
        if (currentPath !== '/login' && currentPath !== '/register') {
          sessionStorage.setItem('previousPath', currentPath);
        }
        window.location.href = '/login';
      } else if (error.response.status === 404) {
        window.location.href = '/not-found';
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
