import styled, { css } from 'styled-components';
import { palette } from '../../styles/globalColor.js';

import { SharedBtn } from './LoginModal/LoginModalStyle.js';

export const EmailLoginContainer = styled.form``;

export const SharedLabel = styled.label`
  display: block;
  font-size: 14px;
  margin: 14px 0 7px 5px;
`;

export const EmailLabel = styled(SharedLabel)``;

export const PasswordLabel = styled(SharedLabel)``;

export const SharedInput = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid ${palette.grayColor2};
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: ${palette.mainColor};
  }
`;

export const EmailInput = styled(SharedInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const PasswordInput = styled(SharedInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const LoginBtn = styled(SharedBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.whiteColor};
`;
