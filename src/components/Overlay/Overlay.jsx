// src/components/Overlay/Overlay.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);

  const isSignupModalVisible = useSelector(state => state.isSignupModalVisible);

  useEffect(() => {
    if (isLoginModalVisible || isSignupModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoginModalVisible, isSignupModalVisible]);

  if (!isLoginModalVisible && !isSignupModalVisible) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalOverlay></ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Overlay;
