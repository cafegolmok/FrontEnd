// src/components/helpers/BaseModal.jsx

import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { palette } from '../../styles/globalColor';

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 10px;
  background-color: ${palette.whiteColor};
  z-index: 100;
  overflow: hidden;
  animation: ${props => (props.isVisible ? slideUpIn : slideUpOut)} 300ms;

  h2 {
    position: relative;
    font-weight: 500;
    color: ${palette.blackColor};
  }

  p {
    margin-bottom: 24px;
  }
`;

const ModalTop = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid ${palette.grayColor2};
  text-align: center;
`;

const CloseBtn = styled.svg`
  position: absolute;
  top: 14px;
  left: 16px;
  box-sizing: content-box;
  padding: 2px;
  fill: ${palette.blackColor};
  cursor: pointer;

  &:hover {
    background-color: ${palette.lightGrayColor};
    border-radius: 50%;
  }
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


const BaseModal = ({ isVisible, onClose, title, children }) => {
  const modalRef = useRef(null);

  const handleModalOutsideClick = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

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

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer ref={modalRef} isVisible={isVisible}>
      <ModalTop>
        <CloseBtn
          onClick={onClose}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
        </CloseBtn>
        <h2>{title}</h2>
      </ModalTop>
      {children}
    </ModalContainer>,
    document.getElementById('modal-root')
  );
};

BaseModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BaseModal;
