// src/api/user.js

import axiosInstance from '../axios';

export const getUserProfile = async userId => {
  try {
    // 서버로부터 사용자 정보를 가져오는 요청
    const response = await axiosInstance.get(`/users/${userId}`);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUserProfile = async (userId, email, nickname, imageFile) => {
  try {
    // FormData 인스턴스 생성
    const formData = new FormData();

    // 이메일, 닉네임, 이미지 파일(있을 경우)을 formData에 추가
    formData.append('email', email);
    formData.append('nickname', nickname);

    if (imageFile) {
      formData.append('profileImage', imageFile);
    }

    // 서버에 수정된 사용자 정보를 전송
    const response = await axiosInstance.patch(`/users/${userId}`, formData, {
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
