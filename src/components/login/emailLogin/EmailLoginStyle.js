import styled, { css } from 'styled-components';
import { palette, typography } from '../../../styles/theme.js';

import { SharedLoginBtn } from '../../common/Button.jsx';
import { SharedLoginInput } from '../../common/Input.jsx';

export const EmailLoginContainer = styled.form``;

export const SharedLabel = styled.label`
  display: block;
  font-size: 14px;
  margin: 14px 0 7px 5px;
`;

export const EmailLabel = styled(SharedLabel)``;

export const PasswordLabel = styled(SharedLabel)``;

export const EmailInput = styled(SharedLoginInput)`
  ${props =>
    props.errors.length > 0 &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const PasswordInput = styled(SharedLoginInput)`
  ${props =>
    props.errors.length > 0 &&
    css`
      border-color: ${palette.redColor};
      &:focus {
        border-color ${palette.redColor};
      }
    `}
`;

export const LoginBtn = styled(SharedLoginBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  font-weight: ${typography.fontWeight.medium};
  color: ${palette.whiteColor};
`;
