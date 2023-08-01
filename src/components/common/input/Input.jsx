// src/components/common/input/Input.jsx

import styled from 'styled-components';
import { palette, typography } from '../../../styles/theme';

export const SharedLoginInput = styled.input`
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

export const SharedLabel = styled.label`
  display: block;
  font-size: ${typography.fontSize.small};
`;

export const InputWithErrors = props => `
  border-color: ${
  props.errors.length > 0 ? palette.redColor : palette.brownColor
};
  &:focus {
  border-color: ${
 props.errors.length > 0 ? palette.redColor : palette.brownColor
};
}
`;
