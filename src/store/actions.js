// /src/store/actions.js:

// 액션 타입 정의
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

// 액션 생성자 함수: 모달 보이기
export const showModal = () => ({
  type: SHOW_MODAL,
});

// 액션 생성자 함수: 모달 숨기기
export const hideModal = () => ({
  type: HIDE_MODAL,
});
