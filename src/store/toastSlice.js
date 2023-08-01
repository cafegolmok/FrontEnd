// src/store/toastSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const toastSlice = createSlice({
  name: 'toast',
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      const newToast = {
        id: Math.random(),
        message: action.payload.message,
        type: action.payload.type,
      };
      return [newToast];
    },

    removeToast: (state, action) => {
      return state.filter(toast => toast.id !== action.payload.id);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
