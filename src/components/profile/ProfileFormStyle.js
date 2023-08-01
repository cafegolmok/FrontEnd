// src/components/profile/ProfileFormStyle.js

import styled from 'styled-components';
import { palette} from '../../styles/theme';
import { SharedLoginBtn } from '../common/Button.jsx';

export const ProfileFormContainer = styled.form``;

export const EditProfileBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;
`;

export const EditProfileBtn = styled(SharedLoginBtn)`
  width: 70px;
  padding: 5px 10px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
