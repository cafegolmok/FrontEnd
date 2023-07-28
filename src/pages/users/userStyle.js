// src/pages/profile/profileStyle.js

import styled from 'styled-components';
import { palette, spacing, typography } from '../../styles/theme';
import { SharedLoginInput } from '../../components/common/Input.jsx';
import { SharedLoginBtn } from '../../components/common/Button.jsx';

import userProfile from '../../../public/assets/icons/user.svg';

export const ProfileContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const ProfileImgSection = styled.section`
  margin: 0 auto;
  width: 300px;
`;

export const ProfileSection = styled.section`
  width: 600px;
  margin: 20px auto 0;
  padding: ${spacing.xlarge};
  border: 1px solid ${palette.grayColor1};
`;

export const ProfileForm = styled.form``;

export const ProfileTitle = styled.h1`
  font-size: ${typography.fontSize.xlarge};
  text-align: center;
`;

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

export const NicknameInput = styled(SharedLoginInput)`
  ${InputWithErrors}
`;

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

export const AddProfileImgModalContent = styled.form`
  padding: ${spacing.xlarge};
`;

export const ProfileImgLabel = styled.label`
  width: 200px;
  display: block;
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${palette.grayColor1};
  cursor: pointer;
  aspect-ratio: 1/1;
  background-image: ${props =>
    props.background ? `url(${props.background})` : `url(${userProfile})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const UploadProfileImgBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 80px;
  padding: 8px;
  background-color: ${palette.whiteColor};
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;
