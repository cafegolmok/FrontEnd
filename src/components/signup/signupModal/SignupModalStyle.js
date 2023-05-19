import styled, { css } from 'styled-components';
import { palette } from '../../../styles/globalColor';

export const SignupModalContent = styled.form`
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
`;

export const SharedLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 7px;
  margin-left: 5px;
  margin-top: 13px;
  &:first-child {
    margin-top: 0;
  }
`;

export const EmailLabel = styled(SharedLabel)``;

export const PasswordLabel = styled(SharedLabel)``;

export const ConfirmPasswordLabel = styled(SharedLabel)``;

export const NicknameLabel = styled(SharedLabel)``;

export const SharedInput = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 10px;
  border: 1px solid ${palette.grayColor2};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${palette.mainColor};
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

export const ConfirmPasswordInput = styled(SharedInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const NicknameInput = styled(SharedInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const SignupBtn = styled.button`
  margin-bottom: 16px;
  display: block;
  padding: 11px;
  border-radius: 5px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
