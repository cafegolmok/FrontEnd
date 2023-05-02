// /src/store/index.js:

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// 스토어 생성 및 미들웨어 적용
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;