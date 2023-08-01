// /src/store/store.js:

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import authReducer from './authSlice';
import toastReducer from './toastSlice';

export default configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    toast: toastReducer,
  },
});
