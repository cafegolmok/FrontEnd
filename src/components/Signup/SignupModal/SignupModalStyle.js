import styled, { css } from 'styled-components';
import { palette, spacing, typography } from '../../../styles/theme';
import { SharedLoginBtn } from '../../common/Button.jsx';
import { SharedLoginInput } from '../../common/Input.jsx';

export const SignupModalContent = styled.form`
  padding: ${spacing.medium};
  height: 400px;
  overflow-y: scroll;
`;

export const SharedLabel = styled.label`
  display: block;
  font-size: ${typography.fontSize.small};
  margin-bottom: 7px;
  margin-left: ${spacing.xsmall};
  margin-top: 13px;
  &:first-child {
    margin-top: 0;
  }
`;

export const EmailLabel = styled(SharedLabel)``;

export const PasswordLabel = styled(SharedLabel)``;

export const ConfirmPasswordLabel = styled(SharedLabel)``;

export const NicknameLabel = styled(SharedLabel)``;

export const EmailInput = styled(SharedLoginInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const PasswordInput = styled(SharedLoginInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const ConfirmPasswordInput = styled(SharedLoginInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const NicknameInput = styled(SharedLoginInput)`
  ${props =>
    props.error &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const SignupBtn = styled(SharedLoginBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
