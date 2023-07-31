// src/components/profile/ProfileImageStyle.js

import styled from 'styled-components';
import { palette, spacing } from '../../styles/theme';
import userProfile from '../../../public/assets/icons/user.svg';


export const ProfileImgSection = styled.section`
  margin: 0 auto;
  width: 300px;
`;

// export const ProfileSection = styled.section`
//   width: 600px;
//   margin: 20px auto 0;
//   padding: ${spacing.xlarge};
//   border: 1px solid ${palette.grayColor1};
// `;

export const ProfileImgForm = styled.form`
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
