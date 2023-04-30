// src/components/Overlay/Overlay.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);

  const isSignupModalVisible = useSelector(state => state.isSignupModalVisible)

  if (!isLoginModalVisible && !isSignupModalVisible) {
    return null;
  }
  return <ModalOverlay></ModalOverlay>;
};

export default Overlay;
