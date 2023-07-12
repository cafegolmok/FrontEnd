// src/store/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null, // user 정보를 저장할 필드 추가
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload; // user 정보를 payload로 받아서 저장
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null; // 로그아웃 시 user 정보를 null로 초기화
    },
    updateProfileImage(state, action) {
      if (state.user) {
        state.user.profileImage = action.payload; // profileImage 정보를 payload로 받아서 저장
      }
    },
  },
});

export const { login, logout, updateProfileImage } = authSlice.actions;
export default authSlice.reducer;
