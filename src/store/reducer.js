// /src/store/reducer.js:

import { SHOW_MODAL, HIDE_MODAL } from './actions';

// 초기 상태 정의
const initialState = {
  isModalVisible: false,
};

// 리듀서 함수: 상태와 액션을 받아 새로운 상태를 반환
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 모달 보이기 액션 처리
    case SHOW_MODAL:
      return { ...state, isModalVisible: true };
    // 모달 숨기기 액션 처리
    case HIDE_MODAL:
      return { ...state, isModalVisible: false };
    // 알 수 없는 액션은 현재 상태 반환
    default:
      return state;
  }
};

export default reducer;
