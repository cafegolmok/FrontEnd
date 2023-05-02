import styled from 'styled-components';
import { palette } from '../../../styles/globalColor';

export const LoginModalContent = styled.form`
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
`;

export const LoginModalText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${palette.blackColor};
`;

/* email & password  */
export const SharedLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 7px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const EmailLabel = styled(SharedLabel)``;

export const PasswordLabel = styled(SharedLabel)``;

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

export const OriginalBtn = styled(LoginBtn)`
  margin-bottom: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;

export const SignupBtn = styled(LoginBtn)`
  background-color: ${palette.grayColor1};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.blackColor};
`;

export const KakaoBtn = styled(LoginBtn)`
  background-color: ${palette.yellowColor};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.blackColor};
`;

/* or-text */
export const OrText = styled.span`
  position: relative;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: ${palette.darkGrayColor2};
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    background-color: ${palette.grayColor2};
    width: 44%;
    height: 1px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 0;
    background-color: ${palette.grayColor2};
    width: 44%;
    height: 1px;
  }
`;

/* warning-message */

export const WarningMsg = styled.strong`
  display: block;
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 13px;
  color: ${palette.redColor};
  display: none;
`;
