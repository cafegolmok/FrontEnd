// src/store/loginSlice.js

import { createSlice } from '@reduxjs/toolkit';

// 초기 상태를 정의
const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoading: false, // 로딩 상태
  user: null, // 로그인한 사용자 정보
  error: null, // 에러 정보
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: state => {
      // 로그인 요청 액션을 처리하는 리듀서
      state.isLoading = true; // 로딩 상태를 true로 변경
      state.error = null; // 에러 정보 초기화
    },
    loginSuccess: (state, action) => {
      // 로그인 성공 액션을 처리하는 리듀서
      state.isLoggedIn = true; // 로그인 상태를 true로 변경
      state.isLoading = false; // 로딩 상태를 false로 변경
      state.user = action.payload; // 로그인한 사용자 정보를 상태에 저장
      state.error = null; // 에러 정보 초기화
    },
    loginFailure: (state, action) => {
      // 로그인 실패 액션을 처리하는 리듀서
      state.isLoggedIn = false; // 로그인 상태를 false로 변경
      state.isLoading = false; // 로딩 상태를 false로 변경
      state.user = null; // 사용자 정보 초기화
      state.error = action.payload; // 에러 정보를 상태에 저장
    },
    logout: state => {
      // 로그아웃 액션을 처리하는 리듀서
      state.isLoggedIn = false; // 로그인 상태를 false로 변경
      state.user = null; // 사용자 정보 초기화
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
