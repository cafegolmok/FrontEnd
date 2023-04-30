// /src/store/actions.js:

// 액션 타입 정의
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';
export const SHOW_SIGNUP_MODAL = 'SHOW_SIGNUP_MODAL';
export const HIDE_SIGNUP_MODAL = 'HIDE_SIGNUP_MODAL';

// 액션 생성자 함수: 모달 보이기
export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
});

// 액션 생성자 함수: 모달 숨기기
export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL,
});

export const showSignupModal = () => ({
  type: SHOW_SIGNUP_MODAL,
});


export const hideSignupModal = () => ({
  type: HIDE_SIGNUP_MODAL,
});
