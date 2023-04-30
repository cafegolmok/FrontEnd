// /src/store/reducer.js:

import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
} from './actions';

// 초기 상태 정의
const initialState = {
  isLoginModalVisible: false,
  isSignupModalVisible: true,
};

// 리듀서 함수: 상태와 액션을 받아 새로운 상태를 반환
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인 모달 보이기 액션 처리
    case SHOW_LOGIN_MODAL:
      return { ...state, isLoginModalVisible: true };
    // 로그인 모달 숨기기 액션 처리
    case HIDE_LOGIN_MODAL:
      return { ...state, isLoginModalVisible: false };
    // 회원가입 모달 보이기 액션 처리
    case SHOW_SIGNUP_MODAL:
      return { ...state, isSignupModalVisible: true };
    // 회원가입 모달 숨기기 액션 처리
    case HIDE_SIGNUP_MODAL:
      return { ...state, isSignupModalVisible: false };
    // 알 수 없는 액션은 현재 상태 반환
    default:
      return state;
  }
};

export default reducer;
