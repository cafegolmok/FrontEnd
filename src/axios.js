// src/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
