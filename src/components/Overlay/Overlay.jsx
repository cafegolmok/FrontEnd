// src/components/Overlay/Overlay.jsx

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);

  const isSignupModalVisible = useSelector(state => state.isSignupModalVisible);

  const isAddProfileImgModalVisible = useSelector(
    state => state.isAddProfileImgModalVisible
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
      isAddProfileImgModalVisible
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
  }, [isLoginModalVisible, isSignupModalVisible, isAddProfileImgModalVisible]);

  if (
    !isClient ||
    (!isLoginModalVisible &&
      !isSignupModalVisible &&
      !isAddProfileImgModalVisible) ||
    !modalRoot
  ) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalOverlay></ModalOverlay>,
    modalRoot
  );
};

export default Overlay;
