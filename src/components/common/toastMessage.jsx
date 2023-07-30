// src/components/common/toastMessage.jsx

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../../styles/theme';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 100px;
  background-color: ${palette.whiteColor};
  color: ${palette.blackColor};
  padding: 14px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const ToastText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckImg = styled.svg`
  margin-right: 10px;
  fill: ${palette.greenColor};
`;

const XImg = styled.svg`
  margin-right: 10px;
  fill: ${palette.redColor};
`;

const ToastMessage = ({ message, id, removeToast, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <ToastContainer>
      <ToastText>
        {type === 'error' ? (
          <XImg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
          >
            <path d='M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z' />
            <path d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z' />
          </XImg>
        ) : (
          <CheckImg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
          >
            <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z' />
            <path d='M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z' />
          </CheckImg>
        )}
        {message}
      </ToastText>
    </ToastContainer>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeToast: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastMessage;
