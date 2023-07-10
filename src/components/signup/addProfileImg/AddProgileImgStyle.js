import styled from 'styled-components';
import { palette, spacing, typography } from '../../../styles/theme';

import { SharedLoginBtn } from '../../common/Button.jsx';

import userProfile from '../../../../public/assets/icons/user.svg';

export const AddProfileImgModalContent = styled.form`
  padding: ${spacing.medium};
`;

export const AddProfileModalText = styled.p`
  margin-bottom: ${spacing.medium};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.large};
  line-height: 1.5;
  color: ${palette.blackColor};
  text-align: center;
  white-space: pre-line;
`;

export const ProfileImgLabel = styled.label`
  width: 170px;
  display: block;
  margin: 0 auto 55px;
  border-radius: 50%;
  background-color: ${palette.grayColor1};
  cursor: pointer;
  aspect-ratio: 1/1;
  background-image: ${props =>
    props.background ? `url(${props.background})` : `url(${userProfile})`};
  background-size: cover;
  background-position: center;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const UploadProfileImgBtn = styled(SharedLoginBtn)`
  margin-bottom: ${spacing.medium};
  background-color: ${props =>
    props.isImageUploaded ? palette.whiteColor : palette.mainColor};
  font-weight: ${typography.fontWeight.medium};
  color: ${props =>
    props.isImageUploaded ? palette.blackColor : palette.whiteColor};
  ${props =>
    props.isImageUploaded && `border: 1px solid ${palette.grayColor1};`}
`;

export const NoUploadProfileImgBtn = styled(SharedLoginBtn)`
  font-weight: ${typography.fontWeight.medium};
  border: 1px solid ${palette.grayColor1};
  color: ${palette.blackColor};
`;

export const SubmitProfileImgBtn = styled(SharedLoginBtn)`
  font-weight: ${typography.fontWeight.medium};
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;
