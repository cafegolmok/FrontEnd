// src/components/profile/ProfileImage.jsx

import React from 'react';
import {
  AddProfileImgModalContent,
  ProfileImgLabel,
  ProfileImgInput,
  UploadProfileImgBtn,
} from '../../pages/users/userStyle';
import userProfile from '../../../public/assets/icons/user.svg';

const ProfileImage = ({
  preview,
  user,
  handleChooseFile,
  handleImageChange,
  fileInputRef,
  isImageUploaded,
  profileImage,
}) => {
  return (
    <ProfileImgSection>
      <AddProfileImgModalContent>
        <ProfileImgLabel
          htmlFor='user-img'
          background={
            preview ||
            (user?.profileImage
              ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${profileImage}`
              : userProfile.src)
          }
        >
          <UploadProfileImgBtn
            onClick={event => handleChooseFile(event)}
            isImageUploaded={isImageUploaded}
          >
            수정
          </UploadProfileImgBtn>
        </ProfileImgLabel>
        <ProfileImgInput
          type='file'
          id='user-img'
          name='user-img'
          onChange={handleImageChange}
          ref={fileInputRef}
          accept='image/*'
        ></ProfileImgInput>
      </AddProfileImgModalContent>
    </ProfileImgSection>
  );
};

export default ProfileImage;
