import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { palette } from '../../../styles/theme.js';

import BaseModal from '../../common/BaseModal.jsx';
import {
  addProfileImgModalToSignupModal,
  addProfileImgModalTosignupSuccessModal,
} from '../../../store/modalSlice.js';
import { SharedLoginBtn } from '../../common/Button.jsx';

import userProfile from '../../../../public/assets/icons/user.svg';

const AddProfileImgModalContent = styled.form`
  padding: 20px;
`;

const AddProfileModalText = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: ${palette.blackColor};
  text-align: center;
  white-space: pre-line;
`;

const ProfileImgLabel = styled.label`
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

const ProfileImgInput = styled.input`
  display: none;
`;

const UploadProfileImgBtn = styled(SharedLoginBtn)`
  margin-bottom: 20px;
  background-color: ${props =>
    props.isImageUploaded ? palette.whiteColor : palette.mainColor};
  font-weight: 500;
  font-size: 16px;
  color: ${props =>
    props.isImageUploaded ? palette.blackColor : palette.whiteColor};
  ${props =>
    props.isImageUploaded && `border: 1px solid ${palette.grayColor1};`}
`;

const NoUploadProfileImgBtn = styled(SharedLoginBtn)`
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${palette.grayColor1};
  color: ${palette.blackColor};
`;

const SubmitProfileImgBtn = styled(SharedLoginBtn)`
  font-weight: 500;
  font-size: 16px;
  background-color: ${palette.mainColor};
  color: ${palette.whiteColor};
`;

const AddProfileImg = () => {
  const isAddProfileImgModalVisible = useSelector(
    state => state.modal.isAddProfileImgModalVisible
  );
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleAddProfileImgModalToSignupModal = () => {
    dispatch(addProfileImgModalToSignupModal());
  };

  const handleAddProfileImgModalTosignupSuccessModal = () => {
    dispatch(addProfileImgModalTosignupSuccessModal());
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      console.log('프로필 이미지 등록!');
      handleAddProfileImgModalTosignupSuccessModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = event => {
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

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  return (
    <BaseModal
      isVisible={isAddProfileImgModalVisible}
      onBack={handleAddProfileImgModalToSignupModal}
      title='프로필 생성하기'
    >
      <AddProfileImgModalContent onSubmit={handleSubmit}>
        <AddProfileModalText>
          {isImageUploaded
            ? '좋아요!'
            : `프로필 이미지 또는 업로드 버튼을 클릭해서\n이미지를 업로드 하세요`}
        </AddProfileModalText>
        <ProfileImgLabel
          htmlFor='user-img'
          background={preview || userProfile.src}
        ></ProfileImgLabel>
        <ProfileImgInput
          type='file'
          id='user-img'
          name='user-img'
          onChange={handleImageChange}
          ref={fileInputRef}
        ></ProfileImgInput>

        {isImageUploaded ? (
          <>
            <SubmitProfileImgBtn onClick={handleSubmit}>
              완료
            </SubmitProfileImgBtn>
            <UploadProfileImgBtn
              onClick={handleChooseFile}
              isImageUploaded={isImageUploaded}
            >
              사진 변경하기
            </UploadProfileImgBtn>
          </>
        ) : (
          <>
            <UploadProfileImgBtn
              onClick={handleChooseFile}
              isImageUploaded={isImageUploaded}
            >
              사진 업로드하기
            </UploadProfileImgBtn>
            <NoUploadProfileImgBtn onClick={handleSubmit}>
              나중에 할게요
            </NoUploadProfileImgBtn>
          </>
        )}
      </AddProfileImgModalContent>
    </BaseModal>
  );
};

export default AddProfileImg;
