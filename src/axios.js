// src/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
