// /src/store/store.js:



import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalState';

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
});



// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer';

// // 스토어 생성 및 미들웨어 적용
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;