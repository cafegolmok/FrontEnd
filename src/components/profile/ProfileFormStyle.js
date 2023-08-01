// src/components/profile/ProfileFormStyle.js

import styled from 'styled-components';
import { palette, spacing, typography } from '../../styles/theme';
import { SharedLoginInput } from '../common/input/Input.jsx';
import { SharedLoginBtn } from '../common/Button.jsx';

export const ProfileFormContainer = styled.form``;

// export const SharedLabel = styled.label`
//   display: block;
//   font-size: ${typography.fontSize.small};
//   margin-bottom: 10px;
//   margin-left: ${spacing.xsmall};
//   margin-top: 25px;
//   &:first-child {
//     margin-top: 0;
//   }
// `;

// export const NicknameLabel = styled(SharedLabel)``;

// const InputWithErrors = props => `
//   border-color: ${
//     props.errors.length > 0 ? palette.redColor : palette.brownColor
//   };
//   &:focus {
//   border-color: ${
//     props.errors.length > 0 ? palette.redColor : palette.brownColor
//   };
// }
// `;

// export const NicknameInput = styled(SharedLoginInput)`
//   ${InputWithErrors}
// `;

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
