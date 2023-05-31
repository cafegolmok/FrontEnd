import styled from 'styled-components';
import { palette, spacing, typography } from '../../../styles/theme';
import { SharedLoginBtn } from '../../common/Button.jsx';
import { SharedLoginInput } from '../../common/Input.jsx';

export const SignupModalContent = styled.form`
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

const InputWithError = props => `
  border-color: ${props.error ? palette.redColor : palette.brownColor};
  &:focus {
    border-color: ${props.error ? palette.redColor : palette.brownColor};
  }
`;

export const EmailInput = styled(SharedLoginInput)`
  ${InputWithError}
`;

export const PasswordInput = styled(SharedLoginInput)`
  ${InputWithError}
`;

export const ConfirmPasswordInput = styled(SharedLoginInput)`
  ${InputWithError}
`;

export const NicknameInput = styled(SharedLoginInput)`
  ${InputWithError}
`;

export const SignupBtn = styled(SharedLoginBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
