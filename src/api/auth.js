// src/api/auth.js

import axiosInstance from '../axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
