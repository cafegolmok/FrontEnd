// src/components/profile/ProfileImage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  ProfileImgSection,
  ProfileImgForm,
  ProfileImgLabel,
  ProfileImgInput,
  UploadProfileImgBtn,
} from './ProfileImageStyle';
import userProfile from '../../../public/assets/icons/user.svg';

const ProfileImage = ({
  profileImage,
  preview,
  setPreview,
  fileInputRef,
  isImageUploaded,
  setIsImageUploaded,
}) => {
  const user = useSelector(state => state.auth.user);

  // 이미지를 선택하면 해당 이미지를 미리보기로 설정
  const handleImageChange = event => {
    event.stopPropagation();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
      setIsImageUploaded(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // 파일 선택 대화상자를 열어 사용자가 이미지를 선택
  const handleChooseFile = event => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <ProfileImgSection>
      <ProfileImgForm>
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
      </ProfileImgForm>
    </ProfileImgSection>
  );
};

ProfileImage.propTypes = {
  profileImage: PropTypes.string,
  setProfileImage: PropTypes.func.isRequired,
  preview: PropTypes.string,
  setPreview: PropTypes.func.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  isImageUploaded: PropTypes.bool.isRequired,
  setIsImageUploaded: PropTypes.func.isRequired,
};

export default ProfileImage;
