// src/components/Overlay/Overlay.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { ModalOverlay } from './OverlayStyle';

const Overlay = () => {
  const isModalVisible = useSelector(state => state.isModalVisible);

  if (!isModalVisible) {
    return null;
  }
  return <ModalOverlay></ModalOverlay>;
};

export default Overlay;
