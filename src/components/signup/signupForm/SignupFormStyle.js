// src/components/signup/signupForm/signupFormStyle.js

import styled from 'styled-components';
import { palette, spacing, typography } from '../../../styles/theme';
import { SharedLoginBtn } from '../../common/Button.jsx';
import { SharedLoginInput } from '../../common/Input.jsx';

export const SignupFormContent = styled.form`
  padding: ${spacing.medium};
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

const InputWithErrors = props => `
  border-color: ${
  props.errors.length > 0 ? palette.redColor : palette.brownColor
};
  &:focus {
  border-color: ${
  props.errors.length > 0 ? palette.redColor : palette.brownColor
};
}
`;

export const EmailInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const PasswordInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const ConfirmPasswordInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const NicknameInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const SignupBtn = styled(SharedLoginBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
