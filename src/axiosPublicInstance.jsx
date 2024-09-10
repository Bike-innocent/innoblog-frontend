import axios from 'axios';

const axiosPublicInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
   // baseURL: 'https://backend.innoblog.com.ng/api', // or your live API URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// No need for Authorization headers here

export default axiosPublicInstance;
