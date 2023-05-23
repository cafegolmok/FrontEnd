// /src/store/modalSlice.js:

import { createSlice } from '@reduxjs/toolkit';

// 초기 상태를 정의
const initialState = {
  isLoginModalVisible: false,
  isSignupModalVisible: false,
  isAddProfileImgModalVisible: false,
  currentModalStep: '', // 단계별 모달을 관리
};

const modalSlice = createSlice({
  // createSlice 함수를 사용하여 리덕스의 액션 생성자와 리듀서 한번에 정의
  name: 'modal',
  initialState,
  reducers: {
    // 액션에 따라 상태를 어떻게 변경할지 정의하는 객체
    showLoginModal: state => {
      state.isLoginModalVisible = true;
      state.currentModalStep = 'login';
    },
    hideLoginModal: state => {
      state.isLoginModalVisible = false;
    },
    showSignupModal: state => {
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },
    hideSignupModal: state => {
      state.isSignupModalVisible = false;
    },
    showAddProfileImgModal: state => {
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'addProfileImg';
    },
    hideAddProfileImgModal: state => {
      state.isAddProfileImgModalVisible = false;
    },

    loginModalToSignupModal: state => {
      state.isLoginModalVisible = false;
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },

    signupModalToLoginModal: state => {
      state.isSignupModalVisible = false;
      state.isLoginModalVisible = true;
      state.currentModalStep = 'login';
    },

    signupModalToAddProfileImgModal: state => {
      state.isSignupModalVisible = false;
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'addProfileImg';
    },

    addProfileModalToSignupModal: state => {
      state.isAddProfileImgModalVisible = false;
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },
  },
});

export const {
  showLoginModal,
  hideLoginModal,
  showSignupModal,
  hideSignupModal,
  showAddProfileImgModal,
  hideAddProfileImgModal,
  signupModalToLoginModal,
  loginModalToSignupModal,
  signupModalToAddProfileImgModal,
  addProfileModalToSignupModal,
} = modalSlice.actions;

export default modalSlice.reducer;
