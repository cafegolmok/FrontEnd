// src/components/Overlay/Overlay.jsx

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isLoginModalVisible = useSelector(
    state => state.modal.isLoginModalVisible
  );

  const isSignupModalVisible = useSelector(
    state => state.modal.isSignupModalVisible
  );

  const isAddProfileImgModalVisible = useSelector(
    state => state.modal.isAddProfileImgModalVisible
  );

  const isSignupSuccessModalVisible = useSelector(
    state => state.modal.isSignupSuccessModalVisible
  );
  const [modalRoot, setModalRoot] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const el =
        document.getElementById('modal-root') || document.createElement('div');
      if (!document.getElementById('modal-root')) {
        el.id = 'modal-root';
        document.body.appendChild(el);
      }
      setModalRoot(el);

      return () => {
        if (!document.getElementById('modal-root')) {
          document.body.removeChild(el);
        }
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (
      isLoginModalVisible ||
      isSignupModalVisible ||
      isAddProfileImgModalVisible ||
      isSignupSuccessModalVisible
    ) {
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
  }, [
    isLoginModalVisible,
    isSignupModalVisible,
    isAddProfileImgModalVisible,
    isSignupSuccessModalVisible,
  ]);

  if (
    !isClient ||
    (!isLoginModalVisible &&
      !isSignupModalVisible &&
      !isAddProfileImgModalVisible &&
      !isSignupSuccessModalVisible) ||
    !modalRoot
  ) {
    return null;
  }
  return ReactDOM.createPortal(<ModalOverlay></ModalOverlay>, modalRoot);
};

export default Overlay;
