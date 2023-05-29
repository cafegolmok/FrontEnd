// src/components/helpers/BaseModal.jsx

import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { palette } from '../../styles/theme';
import { useSelector } from 'react-redux';

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  border-radius: 10px;
  background-color: ${palette.whiteColor};
  z-index: 100;
  overflow: hidden;
  animation: ${props => (props.isVisible ? slideUpIn : slideUpOut)} 400ms;
`;

const ModalTop = styled.div`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid ${palette.grayColor2};
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-weight: 500;
  color: ${palette.blackColor};
`;

const ModalBtn = styled.button`
  position: absolute;
  top: 54%;
  left: 15px;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);

  &:hover {
    background-color: ${palette.lightGrayColor};
    border-radius: 50%;
  }
`;

const CloseBtnImg = styled.svg`
  box-sizing: content-box;
  fill: ${palette.blackColor};
`;

const BackBtnImg = styled.svg`
  box-sizing: content-box;
  fill: ${palette.blackColor};
`;

const slideUpIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const slideUpOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
`;

const BaseModal = ({ isVisible, onClose, onBack, title, children }) => {
  const modalRef = useRef(null);
  const [modalRoot, setModalRoot] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const currentModalStep = useSelector(state => state.modal.currentModalStep);

  const handleModalOutsideClick = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      if (
        currentModalStep === 'login' ||
        currentModalStep === 'signupSuccess'
      ) {
        onClose();
      } else {
        onBack();
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleModalOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    };
  }, [isVisible]);

  if (!isClient || !isVisible || !modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer ref={modalRef} isVisible={isVisible}>
      <ModalTop>
        <ModalBtn>
          {currentModalStep === 'login' ||
          currentModalStep === 'signupSuccess' ? (
            <CloseBtnImg
              onClick={onClose}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
            </CloseBtnImg>
          ) : (
            <BackBtnImg
              onClick={onBack}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z'></path>
            </BackBtnImg>
          )}
        </ModalBtn>
        <ModalTitle>{title}</ModalTitle>
      </ModalTop>
      {children}
    </ModalContainer>,
    modalRoot
  );
};

BaseModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onBack: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BaseModal;
