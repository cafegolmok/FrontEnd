// /src/store/modalState.js:

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalVisible: false,
  isSignupModalVisible: false,
  isAddProfileImgModalVisible: false,
};

const modalState = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLoginModal: state => {
      state.isLoginModalVisible = true;
    },
    hideLoginModal: state => {
      state.isLoginModalVisible = false;
    },
    showSignupModal: state => {
      state.isSignupModalVisible = true;
    },
    hideSignupModal: state => {
      state.isSignupModalVisible = false;
    },
    showAddProfileImgModal: state => {
      state.isAddProfileImgModalVisible = true;
    },
    hideAddProfileImgModal: state => {
      state.isAddProfileImgModalVisible = false;
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
} = modalState.actions;

export default modalState.reducer;
