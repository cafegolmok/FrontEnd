import styled from 'styled-components';
import { palette, typography } from '../../../styles/theme.js';

import { SharedLoginBtn } from '../../common/Button.jsx';
import {
  SharedLoginInput,
  SharedLabel,
  InputWithErrors,
} from '../../common/input/Input.jsx';

export const EmailLoginContainer = styled.form``;

export const EmailLabel = styled(SharedLabel)`
  margin: 14px 0 7px 5px;
`;

export const PasswordLabel = styled(SharedLabel)`
  margin: 14px 0 7px 5px;
`;

export const EmailInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const PasswordInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

export const LoginBtn = styled(SharedLoginBtn)`
  margin-top: 15px;
  background-color: ${palette.mainColor};
  font-weight: ${typography.fontWeight.medium};
  color: ${palette.whiteColor};
`;
