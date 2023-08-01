// src/components/common/input/EmailInputStyle.js

import styled from 'styled-components';
import { SharedLoginInput, SharedLabel, InputWithErrors } from '../Input.jsx';

export const EmailLabel = styled(SharedLabel)`
  margin: 25px 0px 10px 5px;
`;

export const EmailInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;
