// src/components/Overlay/Overlay.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);

  const isSignupModalVisible = useSelector(state => state.isSignupModalVisible);

  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  useEffect(() => {
    if (isLoginModalVisible || isSignupModalVisible) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
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
