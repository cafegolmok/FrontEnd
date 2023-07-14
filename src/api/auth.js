// src/api/auth.js

import axiosInstance from '../axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('auth/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.delete('/auth/logout');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const signupUser = async (nickname, email, password, passwordConfirm) => {
  try {
    const response = await axiosInstance.post('/auth/signup', {
      nickname,
      email,
      password,
      passwordConfirm,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};