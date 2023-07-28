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

const ToastMessage = ({ message, id, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <ToastContainer>
      <ToastText>
        <CheckImg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z' />
          <path d='M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z' />
        </CheckImg>
        {message}
      </ToastText>
    </ToastContainer>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeToast: PropTypes.func.isRequired,
};

export default ToastMessage;
