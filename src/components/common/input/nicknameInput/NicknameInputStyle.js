// src/components/common/input/NicknameStyle.js

import styled from 'styled-components';
import { SharedLoginInput, SharedLabel, InputWithErrors } from '../Input.jsx';

export const NicknameLabel = styled(SharedLabel)`
  margin: 25px 0px 10px 5px;
`;

export const NicknameInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;
