// src/components/common/input/EmailInputStyle.js

import styled from 'styled-components';
import { palette, spacing, typography } from '../../../../styles/theme';
import { SharedLoginInput } from '../Input.jsx';

export const SharedLabel = styled.label`
  display: block;
  font-size: ${typography.fontSize.small};
  margin-bottom: 10px;
  margin-left: ${spacing.xsmall};
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
`;

export const EmailLabel = styled(SharedLabel)``;

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
