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

export const signupUser = async (
  nickname,
  email,
  password,
  passwordConfirm
) => {
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

export const updateUserProfileImage = async imageFile => {
  try {
    // FormData 인스턴스 생성
    const formData = new FormData();

    // 이미지 파일을 formData에 추가
    formData.append('profileImage', imageFile);

    // 서버에 파일을 전송
    const response = await axiosInstance.patch('/auth/profileImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkUserLoginStatus = async () => {
  try {
    const response = await axiosInstance.get('/auth/check-login-status');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const kakaoLogin = async (userId) => {  
  try {
    const response = await axiosInstance.post('/auth/kakao', { userId });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};