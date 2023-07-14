// /src/store/modalSlice.js:

import { createSlice } from '@reduxjs/toolkit';

// 초기 상태를 정의
const initialState = {
  isLoginModalVisible: false,
  isSignupModalVisible: false,
  isAddProfileImgModalVisible: false,
  isSignupSuccessModalVisible: false,
  currentModalStep: '', // 단계별 모달을 관리
};

const modalSlice = createSlice({
  // createSlice 함수를 사용하여 리덕스의 액션 생성자와 리듀서 한번에 정의
  name: 'modal',
  initialState,
  reducers: {
    // 액션에 따라 상태를 어떻게 변경할지 정의하는 객체
    showLoginModal: state => {
      // 로그인 모달을 보여주는 액션
      state.isLoginModalVisible = true;
      state.currentModalStep = 'login';
    },
    hideLoginModal: state => {
      // 로그인 모달을 숨기는 액션
      state.isLoginModalVisible = false;
    },
    showSignupModal: state => {
      // 회원가입 모달을 보여주는 액션
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },
    hideSignupModal: state => {
      // 회원가입 모달을 숨기는 액션
      state.isSignupModalVisible = false;
    },
    showAddProfileImgModal: state => {
      // 프로필 이미지 추가 모달을 보여주는 액션
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'addProfileImg';
    },
    hideAddProfileImgModal: state => {
      // 프로필 이미지 추가 모달을 숨기는 액션
      state.isAddProfileImgModalVisible = false;
    },
    showSignupSuccessModal: state => {
      // 회원가입 성공 모달을 보여주는 액션
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'signupSuccess';
    },
    hideSignupSuccessModal: state => {
      // 회원가입 성공 모달을 숨기는 액션
      state.isSignupSuccessModalVisible = false;
    },
    loginModalToSignupModal: state => {
      // 로그인 모달에서 회원가입 모달로 전환하는 액션
      state.isLoginModalVisible = false;
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },
    signupModalToLoginModal: state => {
      // 회원가입 모달에서 로그인 모달로 전환하는 액션
      state.isSignupModalVisible = false;
      state.isLoginModalVisible = true;
      state.currentModalStep = 'login';
    },
    signupModalToAddProfileImgModal: state => {
      // 회원가입 모달에서 프로필 이미지 추가 모달로 전환하는 액션
      state.isSignupModalVisible = false;
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'addProfileImg';
    },
    addProfileImgModalToSignupModal: state => {
      // 프로필 이미지 추가 모달에서 회원가입 모달로 전환하는 액션
      state.isAddProfileImgModalVisible = false;
      state.isSignupModalVisible = true;
      state.currentModalStep = 'signup';
    },
    addProfileImgModalTosignupSuccessModal: state => {
      // 프로필 이미지 추가 모달에서 회원가입 성공 모달로 전환하는 액션
      state.isAddProfileImgModalVisible = false;
      state.isSignupSuccessModalVisible = true;
      state.currentModalStep = 'signupSuccess';
    },
    signupSuccessModalToAddProfileModal: state => {
      // 회원가입 성공 모달에서 프로필 이미지 추가 모달로 전환하는 액션
      state.isSignupSuccessModalVisible = false;
      state.isAddProfileImgModalVisible = true;
      state.currentModalStep = 'addProfileImg';
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
  showSignupSuccessModal,
  hideSignupSuccessModal,
  signupModalToLoginModal,
  loginModalToSignupModal,
  signupModalToAddProfileImgModal,
  addProfileImgModalToSignupModal,
  addProfileImgModalTosignupSuccessModal,
  signupSuccessModalToAddProfileModal,
} = modalSlice.actions;

export default modalSlice.reducer;
