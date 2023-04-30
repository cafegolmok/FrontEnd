import styled from 'styled-components';
import { palette } from '../../styles/globalColor';

export const SignupModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border: 1px solid ${palette.grayColor2};
  border-radius: 10px;
  background-color: ${palette.whiteColor};
  z-index: 100;
  overflow: hidden;

  h2 {
    position: relative;
    font-weight: 500;
    color: ${palette.blackColor};
  }

  p {
    margin-bottom: 24px;
  }
`;

export const SignupModalTop = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid ${palette.grayColor2};
  text-align: center;
`;

export const CloseBtn = styled.svg`
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

export const SignupModalContent = styled.div`
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
`;

/* email & password  */
export const SharedLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 7px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const SharedInput = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid ${palette.grayColor2};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${palette.mainColor};
  }
`;

export const EmailInput = styled(SharedInput)``;

export const PasswordInput = styled(SharedInput)``;

export const ConfirmPasswordInput = styled(SharedInput)``;

export const NicknameInput = styled(SharedInput)``;

export const LoginBtn = styled.button`
  margin-bottom: 16px;
  display: block;
  padding: 11px;
  border-radius: 5px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  opacity: 0.8;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SignupBtn = styled(LoginBtn)`
  margin-bottom: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;

/* warning-message */

export const WarningMsg = styled.strong`
  display: block;
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 13px;
  color: ${palette.redColor};
  /* display: none;  */
`;
